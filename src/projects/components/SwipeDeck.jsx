import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SWIPE_CONFIG } from "../lib/swipeDeckConfig";
import ProjectCard from "./ProjectCard";

function SwipeDeck({ sections, onProjectClick }) {
  const navigate = useNavigate();
  const initialIndex = 0;
  const [phase, setPhase] = useState("idle");
  
  console.log('SwipeDeck rendered with sections:', sections);
  const [activeIndex, setActiveIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
  const [nextIndex, setNextIndex] = useState(null);
  const [previewIndex, setPreviewIndex] = useState(null);
  const [cardBorderRadius, setCardBorderRadius] = useState(0);
  const [showCardBorder, setShowCardBorder] = useState(false);
  const y = useMotionValue(0);
  const x = useMotionValue(0);
  const rotation = useMotionValue(0);
  const navInProgress = useRef(false);
  
  // Add border radius when card is being dragged
  const borderRadius = useTransform(y, (value) => {
    const absValue = Math.abs(value);
    if (absValue < 10) return 0;
    // Gradually increase border radius from 0px to 24px as card is dragged
    return Math.min(24, absValue / 10);
  });
  
  // Add growing shadow at bottom as card is dragged
  const cardShadow = useTransform(y, (value) => {
    const absValue = Math.abs(value);
    if (absValue < 10) return '0 2px 4px rgba(0,0,0,0.1)';
    // Shadow grows from small to large as card is dragged
    const spread = Math.min(60, absValue / 3);
    const blur = Math.min(80, absValue / 2);
    const opacity = Math.min(0.4, absValue / 500);
    return `0 ${spread}px ${blur}px rgba(0,0,0,${opacity})`;
  });
  const wheelCommitted = useRef(false);
  const lastWheelTime = useRef(0);
  const scrollAccum = useRef(0);

  // Removed URL param tracking - start at first section

  // Track preview index based on drag direction
  useEffect(() => {
    const unsubscribe = y.on('change', (latest) => {
      if (phase !== 'dragging') return;
      
      if (latest > 5 && activeIndex > 0) {
        setPreviewIndex(activeIndex - 1);
      } else if (latest < -5 && activeIndex < sections.length - 1) {
        setPreviewIndex(activeIndex + 1);
      }
    });
    
    return unsubscribe;
  }, [phase, activeIndex, y, sections.length]);

  // Track border radius and border visibility based on drag distance
  useEffect(() => {
    const unsubscribe = y.on('change', (latest) => {
      const absValue = Math.abs(latest);
      if (absValue < 10) {
        setCardBorderRadius(0);
        setShowCardBorder(false);
      } else {
        setCardBorderRadius(Math.min(24, absValue / 10));
        setShowCardBorder(true);
      }
    });
    
    return unsubscribe;
  }, [y]);
  
  const dragArcX = useTransform(y, [-300, 0, 300], [40, 0, -40]);
  const dragArcRotation = useTransform(y, [-300, 0, 300], [3, 0, -3]);
  
  // For framer-motion 6.5.1, use separate motion values
  const combinedX = useMotionValue(0);
  const combinedRotation = useMotionValue(0);
  
  useEffect(() => {
    const updateX = () => {
      if (phase === 'committing') {
        combinedX.set(x.get());
      } else {
        combinedX.set(dragArcX.get());
      }
    };
    
    const updateRotation = () => {
      if (phase === 'committing') {
        combinedRotation.set(rotation.get());
      } else {
        combinedRotation.set(dragArcRotation.get());
      }
    };
    
    const unsubscribeX1 = x.on('change', updateX);
    const unsubscribeY1 = y.on('change', updateX);
    const unsubscribeX2 = x.on('change', updateRotation);
    const unsubscribeY2 = y.on('change', updateRotation);
    
    updateX();
    updateRotation();
    
    return () => {
      unsubscribeX1();
      unsubscribeY1();
      unsubscribeX2();
      unsubscribeY2();
    };
  }, [phase, x, y, rotation, dragArcX, dragArcRotation, combinedX, combinedRotation]);
  
  const commitNav = useCallback((targetIndex, isNext) => {
    if (navInProgress.current) return;
    
    navInProgress.current = true;
    setNextIndex(targetIndex);
    setPreviewIndex(null);
    setPhase('committing');
    
    const tY = isNext ? -(window.innerHeight + 100) : (window.innerHeight + 100);
    const tX = isNext ? SWIPE_CONFIG.EXIT_ARC_X : -SWIPE_CONFIG.EXIT_ARC_X;
    const tR = isNext ? SWIPE_CONFIG.EXIT_ARC_ROTATION : -SWIPE_CONFIG.EXIT_ARC_ROTATION;
    
    Promise.all([
      animate(y, tY, { type: "tween", duration: 0.35, ease: "easeOut" }),
      animate(x, tX, { type: "tween", duration: 0.35, ease: "easeOut" }),
      animate(rotation, tR, { type: "tween", duration: 0.35, ease: "easeOut" })
    ]).then(() => {
      setActiveIndex(targetIndex);
      setNextIndex(null);
      y.set(0);
      x.set(0);
      rotation.set(0);
      setPhase('idle');
      setTimeout(() => {
        navInProgress.current = false;
        wheelCommitted.current = false;
      }, 150);
    });
  }, [y, x, rotation]);
  
  const handleChevronClick = useCallback(() => {
    if (phase !== 'idle') return;
    if (activeIndex >= sections.length - 1) return;
    
    commitNav(activeIndex + 1, true);
  }, [phase, activeIndex, sections.length, commitNav]);

  const handleProjectClick = useCallback((projectId) => {
    if (onProjectClick) {
      onProjectClick(projectId);
    } else {
      navigate(`/projects/${projectId}`);
    }
  }, [onProjectClick, navigate]);
  
  const handleDragEnd = useCallback((_, info) => {
    if (phase !== 'dragging') return;
    
    const { offset } = info;
    const dist = Math.abs(offset.y);
    
    if (dist < SWIPE_CONFIG.DRAG_THRESHOLD) {
      setPhase('settling');
      setNextIndex(null);
      setPreviewIndex(null);
      Promise.all([
        animate(y, 0, { type: "tween", duration: 0.25, ease: "easeOut" }),
        animate(x, 0, { type: "tween", duration: 0.25, ease: "easeOut" }),
        animate(rotation, 0, { type: "tween", duration: 0.25, ease: "easeOut" })
      ]).then(() => setPhase('idle'));
      return;
    }
    
    let target = activeIndex;
    const isNext = offset.y < 0;
    
    if (isNext && activeIndex < sections.length - 1) {
      target = activeIndex + 1;
    } else if (!isNext && activeIndex > 0) {
      target = activeIndex - 1;
    }

    if (target === activeIndex) {
      setPhase('settling');
      setNextIndex(null);
      setPreviewIndex(null);
      Promise.all([
        animate(y, 0, { type: "tween", duration: 0.25, ease: "easeOut" }),
        animate(x, 0, { type: "tween", duration: 0.25, ease: "easeOut" }),
        animate(rotation, 0, { type: "tween", duration: 0.25, ease: "easeOut" })
      ]).then(() => setPhase('idle'));
      return;
    }
    
    commitNav(target, isNext);
  }, [phase, y, x, rotation, activeIndex, commitNav]);
  
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    
    if (navInProgress.current) return;
    if (phase === 'committing' || phase === 'settling') return;
    if (wheelCommitted.current) return;
    
    const now = Date.now();
    const gap = now - lastWheelTime.current;
    lastWheelTime.current = now;
    
    if (phase === 'idle') {
      wheelCommitted.current = false;
      scrollAccum.current = 0;
      setPhase('dragging');
    }
    
    if (phase !== 'dragging') return;
    
    const delta = Math.max(-50, Math.min(50, e.deltaY));
    scrollAccum.current -= delta;
    
    const atFirst = activeIndex === 0;
    const atLast = activeIndex === sections.length - 1;
    const tryPrev = scrollAccum.current > 0;
    const tryNext = scrollAccum.current < 0;
    
    if ((atFirst && tryPrev) || (atLast && tryNext)) {
      const elastic = Math.max(-50, Math.min(50, scrollAccum.current * 0.2));
      y.set(elastic);
      
      setTimeout(() => {
        if (phase === 'dragging') {
          animate(y, 0, { type: "tween", duration: 0.2, ease: "easeOut" }).then(() => {
            scrollAccum.current = 0;
            setPhase('idle');
            wheelCommitted.current = false;
          });
        }
      }, 100);
      return;
    }
    
    y.set(scrollAccum.current);
    
    const dist = Math.abs(scrollAccum.current);
    
    if (dist > SWIPE_CONFIG.DRAG_THRESHOLD && !wheelCommitted.current) {
      wheelCommitted.current = true;
      const isNext = scrollAccum.current < 0;
      let target = activeIndex;
      
      if (isNext && activeIndex < sections.length - 1) {
        target = activeIndex + 1;
      } else if (!isNext && activeIndex > 0) {
        target = activeIndex - 1;
      }
      
      scrollAccum.current = 0;
      
      if (target !== activeIndex) {
        commitNav(target, isNext);
      }
      return;
    }
  }, [phase, activeIndex, y, x, rotation, commitNav, sections.length]);
  
  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  // Preload images for adjacent cards to prevent flash
  useEffect(() => {
    const preloadImages = [];
    
    // Preload previous card
    if (activeIndex > 0) {
      const prevSection = sections[activeIndex - 1];
      if (prevSection?.project?.image) preloadImages.push(prevSection.project.image);
      if (prevSection?.project?.logo) preloadImages.push(prevSection.project.logo);
    }
    
    // Preload next card
    if (activeIndex < sections.length - 1) {
      const nextSection = sections[activeIndex + 1];
      if (nextSection?.project?.image) preloadImages.push(nextSection.project.image);
      if (nextSection?.project?.logo) preloadImages.push(nextSection.project.logo);
    }
    
    // Create Image objects to trigger browser preload
    const imgElements = preloadImages.map(src => {
      const img = new Image();
      img.src = src;
      return img;
    });
    
    return () => {
      imgElements.forEach(img => { img.src = ''; });
    };
  }, [activeIndex, sections]);
  
  // Safety check for empty sections
  if (!sections || sections.length === 0) {
    console.warn('SwipeDeck: No sections provided');
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#293a8d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}>
        No projects available
      </div>
    );
  }
  
  console.log('SwipeDeck: Rendering with', sections.length, 'sections');

  const activeSection = sections[activeIndex] || sections[0];
  console.log('Active section:', activeSection);
  const behindIndex = (() => {
    if (phase === "committing" && nextIndex !== null) return nextIndex;
    if (previewIndex !== null) return previewIndex;
    if (activeIndex < sections.length - 1) return activeIndex + 1;
    if (activeIndex > 0) return activeIndex - 1;
    return activeIndex;
  })();
  const behindSection = sections[behindIndex] || sections[0];
  
  // Helper function to render non-project sections (intro, contact, etc.)
  const renderNonProjectSection = (section) => (
    <div 
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 32px'
      }}
    >
      {section.id === 'intro' && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/images/pattern_2.png)',
          backgroundSize: '30px',
          backgroundRepeat: 'repeat',
          opacity: 0.15,
          filter: 'brightness(2) invert(1)',
          pointerEvents: 'none',
          zIndex: 0
        }} />
      )}
      <h1 style={{ 
        fontSize: '3.75rem', 
        fontWeight: 'bold', 
        marginBottom: '1.5rem',
        color: section?.textColor, 
        position: 'relative', 
        zIndex: 1 
      }}>
        {section?.title}
      </h1>
      <p style={{ 
        fontSize: '1.25rem', 
        textAlign: 'center', 
        maxWidth: '42rem',
        color: section?.textColor, 
        position: 'relative', 
        zIndex: 1 
      }}>
        {section?.description}
      </p>
      {section.id === 'intro' && (
        <div className="container_2" onClick={handleChevronClick}>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
      )}
    </div>
  );
  
  return (
    <div
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        touchAction: "none",
        backgroundColor: behindSection?.backgroundColor || '#293a8d',
        zIndex: 9999 // Ensure it's on top
      }}
    >
      {/* Debug overlay - remove after testing */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: '10px',
        zIndex: 10000,
        fontSize: '12px',
        color: 'black',
        borderRadius: '4px'
      }}>
        SwipeDeck Active: {activeIndex} / {sections.length - 1}
        <br />
        Phase: {phase}
        <br />
        Section: {activeSection?.title || 'N/A'}
      </div>
      
      {/* Behind layer */}
      <div
        style={{ 
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 1, 
          backgroundColor: behindSection?.backgroundColor,
          backgroundImage: behindSection?.project?.image ? `url(${behindSection.project.image})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {behindSection?.project ? (
          <div 
            style={{ 
              width: "100%", 
              height: "100%", 
              backgroundColor: 'transparent',
              backgroundImage: behindSection.project.image ? `url(${behindSection.project.image})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative'
            }}
          >
            <div style={{
              content: '',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to top, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.9) 15%, rgba(255, 255, 255, 0.75) 25%, rgba(255, 255, 255, 0.55) 35%, rgba(255, 255, 255, 0.35) 42%, rgba(255, 255, 255, 0.18) 48%, rgba(255, 255, 255, 0.08) 52%, transparent 58%)',
              zIndex: 1
            }} />
            <div style={{
              content: '',
              position: 'absolute',
              top: '20px',
              left: '20px',
              right: '20px',
              bottom: '20px',
              borderRadius: '8px',
              pointerEvents: 'none',
              zIndex: 10,
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 20%, rgba(41, 58, 141, 0.5) 60%, rgba(41, 58, 141, 1) 100%)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              padding: '4px',
              clipPath: 'polygon(0 0, calc(100% - 64px) 0, calc(100% - 64px) 20px, calc(100% - 20px) 20px, calc(100% - 20px) 64px, 100% 64px, 100% 100%, 0 100%)'
            }} />
            <div className="behind-preview-fullscreen">
              <div className="behind-preview-corner-logo-wrapper">
                <img src="/images/logo.png" alt="" className="behind-preview-corner-logo" />
              </div>
              {behindSection.project.logo && (
                <div className="behind-preview-content">
                  <img 
                    src={behindSection.project.logo} 
                    alt="" 
                    className="behind-preview-logo"
                  />
                </div>
              )}
              <div className="behind-preview-title">
                <h3>{behindSection.project.title}</h3>
                {behindSection.project.subtitle && (
                  <span>{behindSection.project.subtitle}</span>
                )}
              </div>
              <div className="container_2_right" onClick={handleChevronClick}>
                <div className="chevron_right blue"></div>
                <div className="chevron_right blue"></div>
                <div className="chevron_right blue"></div>
              </div>
            </div>
          </div>
        ) : (
          renderNonProjectSection(behindSection)
        )}
      </div>
      
      {/* Active card layer */}
      <motion.div
        key={`section-${activeIndex}`}
        layout={false}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          y,
          x: combinedX,
          rotate: combinedRotation,
          backgroundColor: activeSection?.backgroundColor || '#293a8d',
          zIndex: 2,
          borderRadius,
          boxShadow: cardShadow,
          overflow: 'hidden'
        }}
        drag={phase !== 'committing' && phase !== 'settling' ? "y" : false}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDragStart={() => setPhase('dragging')}
        onDragEnd={handleDragEnd}
      >
        {activeSection?.project ? (
          <ProjectCard
            project={activeSection.project}
            backgroundColor={activeSection.backgroundColor}
            textColor={activeSection.textColor}
            borderRadius={cardBorderRadius}
            showBorder={showCardBorder}
            onChevronClick={handleChevronClick}
            onProjectClick={handleProjectClick}
          />
        ) : (
          renderNonProjectSection(activeSection)
        )}
      </motion.div>
    </div>
  );
}

export default SwipeDeck;
