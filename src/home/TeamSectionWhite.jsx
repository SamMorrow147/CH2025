import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper';
import { motion, AnimatePresence } from 'framer-motion';

// Add global CSS for flip cards
const flipCardStyles = `
  /* Container for all cards */
  .team-cards-container {
    position: relative;
    width: 100%;
    height: 550px;
    max-width: 1100px;
    margin: 0 auto;
  }

  /* Team content responsive height */
  .team_content {
    min-height: 80vh;
  }

  /* Single card */
  .flip-card {
    background-color: transparent;
    width: 230px;
    height: 380px;
    perspective: 1200px;
    position: absolute;
    transition: all 0.8s cubic-bezier(0.34, 1.2, 0.64, 1);
    cursor: pointer;
    transform: translateX(-50%);
  }
  
  /* Position classes for the grid layout */
  .position-0 {
    left: calc(50% - 400px);
    top: 0;
  }
  
  .position-1 {
    left: calc(50% - 130px);
    top: 0;
  }
  
  .position-2 {
    left: calc(50% + 130px);
    top: 0;
  }
  
  .position-3 {
    left: calc(50% + 400px);
    top: 0;
  }
  
  /* Stacked position classes */
  .team-cards-container.stack-mode .flip-card.selected {
    left: 25%;
    top: 0;
    z-index: 10;
  }
  
  .team-cards-container.stack-mode .flip-card.stacked-1 {
    left: 25%;
    top: 15px;
    transform: translateX(-47%);
    z-index: 9;
    opacity: 0.95;
  }
  
  .team-cards-container.stack-mode .flip-card.stacked-2 {
    left: 25%;
    top: 30px;
    transform: translateX(-44%);
    z-index: 8;
    opacity: 0.9;
  }
  
  .team-cards-container.stack-mode .flip-card.stacked-3 {
    left: 25%;
    top: 45px;
    transform: translateX(-41%);
    z-index: 7;
    opacity: 0.85;
  }
  
  /* Card flip state */
  .flip-card.flipped .flip-card-inner {
    transform: rotateY(180deg) !important;
  }
  
  /* Mobile Playing Card Stack - New Framer Motion Approach */
  .mobile-card-stack {
    position: relative;
    width: 280px;
    height: 400px;
    margin: 0 auto;
    display: none;
  }
  
  /* Mobile swipe indicators */
  .mobile-swipe-indicator {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    opacity: 0.4;
    animation: pulseArrow 2s ease-in-out infinite;
    cursor: pointer;
    z-index: 1000;
  }
  
  .mobile-swipe-indicator:hover {
    opacity: 0.7;
  }
  
  .mobile-swipe-indicator:active {
    transform: translateY(-50%) scale(0.95);
  }
  
  .mobile-swipe-indicator.left {
    left: -40px;
    border-right: 12px solid #329ec7;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }
  
  .mobile-swipe-indicator.right {
    right: -40px;
    border-left: 12px solid #329ec7;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }
  
  @keyframes pulseArrow {
    0%, 100% {
      opacity: 0.3;
      transform: translateY(-50%) scale(1);
    }
    50% {
      opacity: 0.7;
      transform: translateY(-50%) scale(1.1);
    }
  }
  
  .mobile-card {
    position: absolute;
    width: 260px;
    height: 380px;
    border-radius: 16px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    cursor: grab;
    user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
  }
  
  .mobile-card:active {
    cursor: grabbing;
  }
  
  .mobile-card .flip-card-inner {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    transition: transform 0.6s ease;
    transform-style: preserve-3d;
  }
  
  .mobile-card.flipped .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  @media (max-width: 768px) {
    .mobile-card-stack {
      display: block;
    }
    
    /* Hide Swiper on mobile */
    .mobile-only-swiper {
      display: none !important;
    }
    
    /* Mobile info panel - appears below card stack */
    .mobile-info-panel {
      display: block !important;
      position: relative !important;
      left: auto !important;
      top: auto !important;
      transform: none !important;
      width: 100% !important;
      max-width: 100% !important;
      margin: 10px auto 0 !important;
      padding: 0 15px 10px !important;
      background-color: transparent !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      text-align: center !important;
      opacity: 1 !important;
      visibility: visible !important;
    }
    
    .mobile-info-panel h3 {
      font-size: 24px !important;
      margin-bottom: 5px !important;
      line-height: 1.1 !important;
    }
    
    .mobile-info-panel h4 {
      font-size: 16px !important;
      margin-bottom: 25px !important;
      line-height: 1.1 !important;
    }
    
    .mobile-info-panel p {
      font-size: 13px !important;
      line-height: 1.2 !important;
      margin-top: -20px !important;
      margin-bottom: -30px !important;
    }
    
    .mobile-info-panel .bio-text {
      margin-bottom: -30px !important;
    }
    
    .mobile-info-panel .skills-list {
      justify-content: center !important;
      margin-top: 10px !important;
      gap: 6px !important;
    }
    
    .mobile-info-panel .skill-tag {
      font-size: 11px !important;
      padding: 2px 6px !important;
    }
    
    /* Completely hide desktop elements on mobile */
    .team-cards-container {
      display: none !important;
      height: 0 !important;
    }
    
    /* Hide the desktop wrapper completely on mobile */
    .team_content > div[style*="height: 550px"] {
      display: none !important;
      height: 0 !important;
    }
    
    .stack-info-panel {
      display: none !important;
    }
    
    .back-to-grid {
      display: none !important;
    }
    
    /* Make the entire section more compact on mobile */
    .team_section {
      min-height: auto !important;
      height: 100vh !important;
      overflow: hidden !important;
      padding-bottom: 0 !important;
      margin-bottom: 0 !important;
    }
    
    /* Adjust spacing for mobile */
    .team_content {
      padding: 25px 5px 8px !important;
      justify-content: flex-start !important;
      minHeight: auto !important;
      height: 100% !important;
      overflow: hidden !important;
    }
    
    /* Reduce title margins on mobile */
    .team_content h2 {
      margin-bottom: 3px !important;
      font-size: clamp(28px, 6vw, 45px) !important;
    }
    
    .team_content p {
      margin-bottom: 10px !important;
      font-size: clamp(13px, 4vw, 16px) !important;
    }
    
    /* Hide arrow on mobile */
    .team_section > div:last-child {
      display: none !important;
    }
  }
  
  /* Ensure desktop styles are preserved */
  @media (min-width: 769px) {
    .team_section {
      min-height: 100vh;
    }
    
    .team_content {
      padding: 40px 5px;
      justify-content: center;
      min-height: 80vh;
    }
    
    .team_content h2 {
      font-size: clamp(40px, 5vw, 70px);
      margin-bottom: 15px;
    }
    
    .team_content p {
      font-size: clamp(18px, 3vw, 30px);
      margin-bottom: 40px;
    }
    
    .mobile-card-stack {
      display: none;
    }
    
    .mobile-info-panel {
      display: none;
    }
  }
  
  /* Responsive grid for different screen sizes */
  @media (max-width: 1100px) and (min-width: 769px) {
    .position-0 {
      left: calc(50% - 260px);
    }
    
    .position-1 {
      left: calc(50% + 260px);
    }
    
    .position-2 {
      left: calc(50% - 260px);
      top: 400px;
    }
    
    .position-3 {
      left: calc(50% + 260px);
      top: 400px;
    }
    
    .team-cards-container {
      height: 800px;
    }
    
    /* Adjust stack info panel for smaller screens */
    .stack-info-panel {
      left: 65%;
      width: 50%;
    }
  }
  
  /* Back button positioning - moved to the right of the stack */
  .team-cards-container.stack-mode + .back-to-grid {
    position: absolute;
    left: 25%;
    top: 420px;
    transform: translateX(-50%);
  }
  
  /* Stack info panel - appears to the right of the stack */
  .stack-info-panel {
    position: absolute;
    left: 65%;
    top: 0;
    transform: translate(-50%, 0);
    width: 40%;
    max-width: 450px;
    opacity: 0;
    transition: opacity 0.6s ease 0.3s;
    color: #293a8d;
    text-align: left;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
  
  .stack-info-panel.visible {
    opacity: 1;
  }
  
  .stack-info-panel h3 {
    margin: 0 0 5px 0;
    color: #293a8d;
    font-size: 32px;
    line-height: 1.2;
  }
  
  .stack-info-panel h4 {
    margin: 0 0 20px 0;
    color: #329ec7;
    font-size: 20px;
    font-weight: normal;
  }
  
  .stack-info-panel p {
    margin: 0;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
  }
  
  .stack-info-panel .bio-text {
    margin-bottom: 20px;
  }
  
  .stack-info-panel .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 15px;
  }
  
  .stack-info-panel .skill-tag {
    background-color: rgba(50, 158, 199, 0.1);
    color: #329ec7;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 14px;
  }
  
  /* Card inner structure */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
    transform-style: preserve-3d;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    overflow: hidden;
  }
  
  /* Normal flip behavior for grid mode */
  .team-cards-container:not(.stack-mode) .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 10px;
  }
  
  .flip-card-front {
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    overflow: hidden;
  }
  
  .flip-card-front .card-image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  
  .flip-card-front .card-info {
    position: relative;
    z-index: 2;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.9);
    width: 100%;
  }
  
  .flip-card-back {
    background-color: white;
    transform: rotateY(180deg);
    overflow: hidden;
  }
  
  /* Back button */
  .back-to-grid {
    background: #329ec7;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  .back-to-grid.visible {
    opacity: 1;
    pointer-events: auto;
  }
  
  /* Hide navigation arrows on desktop */
  @media (min-width: 1024px) {
    .team_carousel_container .swiper-button-next,
    .team_carousel_container .swiper-button-prev {
      display: none !important;
    }
    
    /* Hide Swiper on desktop */
    .mobile-only-swiper {
      display: none !important;
    }
  }
  
  /* Hide desktop grid on mobile */
  @media (max-width: 768px) {
    .team-cards-container {
      display: none !important;
    }
    
    .back-to-grid {
      display: none !important;
    }
  }
`;

// Team member data with character animations and photos
const teamMembers = [
  {
    name: "Sam",
    title: "Creative Director",
    photo: "/images/PortfolioSlider/slide1.jpg",
    character: "/images/team/Sam-Front.png"
  },
  {
    name: "Noah",
    title: "Art Director",
    photo: "/images/PortfolioSlider/slide2.jpg",
    character: "/images/team/Noah-Front.png"
  },
  {
    name: "Darby",
    title: "Lead Developer",
    photo: "/images/PortfolioSlider/slide3.jpg",
    character: "/images/team/Darby-Front.png"
  },
  {
    name: "Liam",
    title: "Account Manager",
    photo: "/images/PortfolioSlider/slide4.jpg",
    character: "/images/team/Liam-Front"
  }
];

export default function TeamSectionWhite({ paused, arrowClick }) {
  // State to store the current order of team members
  const [teamMembersOrder, setTeamMembersOrder] = useState([...teamMembers]);
  const [selectedMemberName, setSelectedMemberName] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  
  // Mobile card stack state - New Framer Motion approach
  const [mobileCardOrder, setMobileCardOrder] = useState([...teamMembers]);
  const [draggedCardIndex, setDraggedCardIndex] = useState(null);
  const [animatingDirection, setAnimatingDirection] = useState(null); // 'forward' or 'backward'
  
  // Card stack positions and rotations for organic look
  const getCardTransform = (index) => {
    // More organic, varied offsets for each card position
    const organicOffsets = [
      { x: 0, y: 0, rotate: 0, scale: 1 }, // Top card - perfect alignment
      { x: -5, y: 3, rotate: -4, scale: 0.98 },
      { x: 8, y: 6, rotate: 6, scale: 0.96 },
      { x: -12, y: 9, rotate: -2, scale: 0.94 },
      { x: 3, y: 12, rotate: 8, scale: 0.92 },
      { x: -8, y: 15, rotate: -6, scale: 0.90 },
      { x: 15, y: 18, rotate: 3, scale: 0.88 },
      { x: -6, y: 21, rotate: -8, scale: 0.86 },
      { x: 10, y: 24, rotate: 5, scale: 0.84 },
      { x: -14, y: 27, rotate: -3, scale: 0.82 },
      { x: 7, y: 30, rotate: 7, scale: 0.80 }
    ];
    
    // Use predefined organic offsets if available, otherwise calculate
    const baseOffset = organicOffsets[index] || {
      x: Math.sin(index * 1.3) * 16,
      y: index * 3.5,
      rotate: (Math.sin(index * 0.9) * 9) + (index * 0.8),
      scale: Math.max(0.75, 1 - (index * 0.03))
    };
    
    return {
      x: baseOffset.x,
      y: baseOffset.y,
      rotate: baseOffset.rotate,
      scale: baseOffset.scale,
      zIndex: 100 - index
    };
  };
  
  // Handle drag end - move card to back of stack
  const handleDragEnd = (cardIndex) => {
    const newOrder = [...mobileCardOrder];
    const draggedCard = newOrder.splice(cardIndex, 1)[0];
    newOrder.push(draggedCard); // Move to back
    setMobileCardOrder(newOrder);
    setDraggedCardIndex(null);
  };
  
  // Handle arrow click to cycle cards
  const handleArrowClick = (direction) => {
    // Prevent multiple clicks during animation
    if (animatingDirection) return;
    
    // Set animation state
    setAnimatingDirection(direction);
    
    // After animation completes, update the order
    setTimeout(() => {
      const newOrder = [...mobileCardOrder];
      
      if (direction === 'forward') {
        // Move top card to back (same as drag)
        const topCard = newOrder.shift();
        newOrder.push(topCard);
      } else if (direction === 'backward') {
        // Move bottom card to top
        const bottomCard = newOrder.pop();
        newOrder.unshift(bottomCard);
      }
      
      setMobileCardOrder(newOrder);
      setAnimatingDirection(null);
    }, 400); // Match animation duration
  };
  
  // Handle card tap to flip
  const handleMobileCardTap = (index) => {
    // On mobile, tapping doesn't do anything - just let drag handle everything
    // The info panel will always show the top card's info
  };
  
  // Handle card click to expand view
  const handleCardClick = (memberName) => {
    if (selectedMemberName === memberName) {
      handleCloseSelected();
    } else {
      setSelectedMemberName(memberName);
      
      // Show button and info panel after animation
      setTimeout(() => {
        setShowButton(true);
        setShowInfo(true);
      }, 400);
    }
  };
  
  // Handle closing the selected card with animation
  const handleCloseSelected = () => {
    // Hide button and info first
    setShowButton(false);
    setShowInfo(false);
    
    // Reorder the array to put the selected member at the front
    const newOrder = [...teamMembersOrder];
    const selectedIndex = newOrder.findIndex(m => m.name === selectedMemberName);
    const selectedItem = newOrder.splice(selectedIndex, 1)[0];
    newOrder.unshift(selectedItem);
    setTeamMembersOrder(newOrder);
    
    // Reset selected member
    setTimeout(() => {
      setSelectedMemberName(null);
    }, 600);
  };
  
  // Get the selected member data for the info panel
  const selectedMemberData = selectedMemberName !== null 
    ? (mobileCardOrder.find(m => m.name === selectedMemberName) || teamMembersOrder.find(m => m.name === selectedMemberName))
    : null;
    
  // Determine card classes based on selection state
  const getCardClasses = (memberName) => {
    let classes = ["flip-card"];
    
    // Add position class if not in stack mode
    if (!selectedMemberName) {
      const index = teamMembersOrder.findIndex(m => m.name === memberName);
      classes.push(`position-${index}`);
    } else {
      // Add selected or stacked classes
      if (memberName === selectedMemberName) {
        classes.push("selected", "flipped");
      } else {
        // Find position in the stacked order
        const stackIndex = teamMembersOrder
          .filter(m => m.name !== selectedMemberName)
          .findIndex(m => m.name === memberName);
        classes.push(`stacked-${stackIndex + 1}`, "flipped");
      }
    }
    
    return classes.join(" ");
  };
  
  return (
    <div className="team_section" style={{ 
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      position: 'relative'
    }}>
      {/* Include the flip card styles */}
      <style dangerouslySetInnerHTML={{ __html: flipCardStyles }} />
      
      <div className="team_wrapper container" style={{ maxWidth: '1100px', width: '100%', margin: '0 auto' }}>
        <div className="team_content" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 5px',
          position: 'relative'
        }}>
          <p style={{
            color: '#293a8d',
            fontSize: 'clamp(18px, 3vw, 30px)',
            marginBottom: '40px',
            maxWidth: '800px',
            textAlign: 'center',
            margin: '0 auto 40px'
          }}>Meet the talented individuals behind ClubHaus' success.</p>
          
          {/* New Mobile Playing Card Stack with Framer Motion - Moved up */}
          <div className="mobile-card-stack">
            {/* Swipe indicators */}
            <div 
              className="mobile-swipe-indicator left"
              onClick={() => handleArrowClick('backward')}
            ></div>
            <div 
              className="mobile-swipe-indicator right"
              onClick={() => handleArrowClick('forward')}
            ></div>
            
            <AnimatePresence>
              {mobileCardOrder.map((member, index) => {
                const transform = getCardTransform(index);
                const isDragged = draggedCardIndex === index;
                const isAnimatingOut = animatingDirection && index === 0; // Animate top card out
                
                // Calculate animation transform
                let animateTransform = transform;
                if (isAnimatingOut) {
                  animateTransform = {
                    x: animatingDirection === 'forward' ? 200 : -200,
                    y: transform.y,
                    rotate: animatingDirection === 'forward' ? 15 : -15,
                    scale: 0.8,
                    zIndex: 200
                  };
                }
                
                return (
                  <motion.div
                    key={`mobile-${member.name}`}
                    className={`mobile-card mobile-card-${index}`}
                    drag
                    dragMomentum={false}
                    dragElastic={0.1}
                    dragConstraints={{ 
                      left: -150, 
                      right: 150, 
                      top: -100, 
                      bottom: 100 
                    }}
                    initial={animateTransform}
                    animate={isDragged ? {} : animateTransform}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20
                    }}
                    onDragStart={() => setDraggedCardIndex(index)}
                    onDragEnd={(event, info) => {
                      // If dragged more than 50px in any direction, move to back
                      const dragDistance = Math.sqrt(
                        Math.pow(info.offset.x, 2) + Math.pow(info.offset.y, 2)
                      );
                      
                      if (dragDistance > 50) {
                        handleDragEnd(index);
                      }
                      // No tap handling needed - info panel always shows top card
                    }}
                    whileDrag={{
                      scale: 1.05,
                      rotate: 5,
                      zIndex: 200,
                      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
                    }}
                    style={{
                      zIndex: transform.zIndex,
                      opacity: (isAnimatingOut || index === 0) ? 1 : (index < 8 ? 1 - (index * 0.1) : 0.2)
                    }}
                  >
                    <div className="flip-card-inner">
                      {/* Front - Character Animation */}
                      <div className="flip-card-front">
                        <div className="card-image">
                          <img 
                            src={member.character} 
                            alt={`${member.name}`} 
                            style={{ 
                              width: '100%', 
                              height: '100%',
                              objectFit: 'cover',
                              pointerEvents: 'none' // Prevent image drag interference
                            }} 
                          />
                        </div>
                      </div>
                      
                      {/* Back - Team Member Photo */}
                      <div className="flip-card-back">
                        <div style={{ height: '320px', overflow: 'hidden' }}>
                          <img 
                            src={member.photo} 
                            alt={member.name} 
                            style={{ 
                              width: '100%', 
                              height: '100%', 
                              objectFit: 'cover',
                              pointerEvents: 'none' // Prevent image drag interference
                            }} 
                          />
                        </div>
                        <div style={{ 
                          padding: '20px', 
                          textAlign: 'center' 
                        }}>
                          <h3 style={{ 
                            margin: '0 0 10px 0', 
                            color: '#293a8d', 
                            fontSize: '24px' 
                          }}>
                            {member.name}
                          </h3>
                          <p style={{ 
                            margin: '0', 
                            color: '#329ec7', 
                            fontSize: '16px' 
                          }}>
                            {member.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          
          {/* Mobile Info Panel - always shows top card info */}
          <div className="mobile-info-panel">
            <h3>{mobileCardOrder[0].name}</h3>
            <h4>{mobileCardOrder[0].title}</h4>
            
            <div className="bio-text">
              <p>
                {mobileCardOrder[0].name} brings exceptional talent to our team at ClubHaus. 
                With years of experience as a {mobileCardOrder[0].title.toLowerCase()}, 
                {mobileCardOrder[0].name} consistently delivers outstanding results for our clients.
              </p>
            </div>
          </div>
          
          {/* Desktop version - all cards with absolute positioning */}
          <div style={{ position: 'relative', width: '100%', height: '550px' }}>
            <div className={`team-cards-container ${selectedMemberName ? 'stack-mode' : ''}`}>
              {teamMembersOrder.map((member) => (
                <div 
                  key={`${member.name}`}
                  className={getCardClasses(member.name)}
                  onClick={() => handleCardClick(member.name)}
                >
                  <div className="flip-card-inner">
                    {/* Front - Character Animation */}
                    <div className="flip-card-front">
                      <div className="card-image">
                        <img 
                          src={member.character} 
                          alt={`${member.name}`} 
                          style={{ 
                            width: '100%', 
                            height: '100%',
                            objectFit: 'cover' 
                          }} 
                        />
                      </div>
                    </div>
                    
                    {/* Back - Team Member Photo */}
                    <div className="flip-card-back">
                      <div style={{ height: '290px', overflow: 'hidden' }}>
                        <img 
                          src={member.photo} 
                          alt={member.name} 
                          style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover' 
                          }} 
                        />
                      </div>
                      <div style={{ 
                        padding: '10px', 
                        textAlign: 'center' 
                      }}>
                        <h3 style={{ 
                          margin: '0 0 5px 0', 
                          color: '#293a8d', 
                          fontSize: '20px' 
                        }}>
                          {member.name}
                        </h3>
                        <p style={{ 
                          margin: '0', 
                          color: '#329ec7', 
                          fontSize: '14px' 
                        }}>
                          {member.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Info panel that appears when card is selected */}
            {selectedMemberData && (
              <div className={`stack-info-panel ${showInfo ? 'visible' : ''}`}>
                <h3>{selectedMemberData.name}</h3>
                <h4>{selectedMemberData.title}</h4>
                
                <div className="bio-text">
                  <p>
                    {selectedMemberData.name} brings exceptional talent to our team at ClubHaus. 
                    With years of experience as a {selectedMemberData.title.toLowerCase()}, 
                    {selectedMemberData.name} consistently delivers outstanding results for our clients.
                  </p>
                </div>
                
                <p>Core skills:</p>
                <div className="skills-list">
                  <span className="skill-tag">Strategic Thinking</span>
                  <span className="skill-tag">Problem Solving</span>
                  <span className="skill-tag">Client Relations</span>
                  <span className="skill-tag">Team Leadership</span>
                </div>
              </div>
            )}
            
            {/* Back button */}
            <button 
              className={`back-to-grid ${showButton ? 'visible' : ''}`}
              onClick={handleCloseSelected}
            >
              View All Team Members
            </button>
          </div>
          
          {/* Mobile version with swiper */}
          <div className="team_carousel_container mobile-only-swiper" style={{ maxWidth: '1200px', margin: '40px auto 0' }}>
            <Swiper
              modules={[Navigation, FreeMode]}
              spaceBetween={30}
              navigation
              slidesPerView={1}
              centeredSlides={false}
              initialSlide={0}
              loop={true}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 }
              }}
              style={{ paddingTop: '20px', paddingBottom: '50px' }}
            >
              {teamMembersOrder.map((member, index) => (
                <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                  <div 
                    className="flip-card"
                    onClick={() => handleCardClick(member.name)}
                  >
                    <div className="flip-card-inner">
                      {/* Front - Character Animation */}
                      <div className="flip-card-front">
                        <div className="card-image">
                          <img 
                            src={member.character} 
                            alt={`${member.name}`} 
                            style={{ 
                              width: '100%', 
                              height: '100%',
                              objectFit: 'cover' 
                            }} 
                          />
                        </div>
                      </div>
                      
                      {/* Back - Team Member Photo */}
                      <div className="flip-card-back">
                        <div style={{ height: '290px', overflow: 'hidden' }}>
                          <img 
                            src={member.photo} 
                            alt={member.name} 
                            style={{ 
                              width: '100%', 
                              height: '100%', 
                              objectFit: 'cover' 
                            }} 
                          />
                        </div>
                        <div style={{ 
                          padding: '10px', 
                          textAlign: 'center' 
                        }}>
                          <h3 style={{ 
                            margin: '0 0 5px 0', 
                            color: '#293a8d', 
                            fontSize: '20px' 
                          }}>
                            {member.name}
                          </h3>
                          <p style={{ 
                            margin: '0', 
                            color: '#329ec7', 
                            fontSize: '14px' 
                          }}>
                            {member.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      
      {/* Arrow to scroll to next section */}
      <div 
        onClick={arrowClick}
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer'
        }}
      >
        <div className="container_2">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
      </div>
    </div>
  );
} 