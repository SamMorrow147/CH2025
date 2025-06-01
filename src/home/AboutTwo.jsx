import City from '../animations/City.jsx'
import Background from './Background'
import React, { Suspense, lazy, useState, useEffect, useRef } from 'react';
import DownArrow from '../components/DownArrow.jsx';
const Typist = lazy(() => import('react-typist'));

export default function AboutTwo(props) {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isMobileSafari = isIOS && isSafari;
  // Track window width for responsive design
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [typingKey, setTypingKey] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [showPoster, setShowPoster] = useState(true);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const videoRef = useRef(null);
  const posterRef = useRef(null);
  
  // Track previous paused state to detect changes
  const prevPausedRef = React.useRef(true);
    
  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Reset animations only on first visit to section
  useEffect(() => {
      if (prevPausedRef.current === true && props.paused === false) {
          // Section just became visible
          if (!hasVisited) {
              // Reset all states
              setTypingKey(k => k + 1);
              setTypingComplete(false);
              setShowContent(true); // Always show content
              setHasVisited(true);
              
              // Start the sequence
              setShouldLoadVideo(true);
          }
      }
      // Update the ref with current paused state
      prevPausedRef.current = props.paused;
  }, [props.paused, hasVisited]);
  
  // Handle typing completion
  const handleTypingComplete = () => {
    setTypingComplete(true);
    // Add delay before showing paragraph
    setTimeout(() => {
      setShowParagraph(true);
    }, 800);
  };
  
  // Handle delayed video loading for better performance
  useEffect(() => {
      if (!shouldLoadVideo) return;
      
      // For mobile Safari, skip video loading and just show content
      if (isMobileSafari) {
          setShowContent(true);
          setShowPoster(false);
          return;
      }
      
      // Load and play video with a slight delay for better Safari performance
      const loadTimer = setTimeout(() => {
          if (videoRef.current) {
              // For Safari, use explicit load() call
              if (isSafari) {
                  videoRef.current.load();
              }
              
              // Add a delay before playing to allow for resource loading
              const playTimer = setTimeout(() => {
                  if (videoRef.current) {
                      const playPromise = videoRef.current.play();
                      
                      if (playPromise !== undefined) {
                          playPromise
                            .then(() => {
                                setVideoPlaying(true);
                                setShowContent(true);
                                setTimeout(() => setShowPoster(false), 300);
                            })
                            .catch(err => {
                                console.error("Error playing video:", err);
                                // Show content even if video fails
                                setShowContent(true);
                                setShowPoster(false);
                            });
                      } else {
                          // Fallback for browsers where play() doesn't return a promise
                          setVideoPlaying(true);
                          setShowContent(true);
                          setTimeout(() => setShowPoster(false), 500);
                      }
                  }
              }, isSafari ? 300 : 100);
              
              return () => clearTimeout(playTimer);
          }
      }, 100);
      
      return () => clearTimeout(loadTimer);
  }, [shouldLoadVideo, isSafari, isMobileSafari]);

  // Handle video loaded event
  const handleVideoLoaded = () => {
      setVideoLoaded(true);
  };

  const navigateToSection = (section) => {
      if (window.fullpage_api) {
          if (section === 'contact') {
              window.fullpage_api.moveTo(7);
          }
      }
  };

  // Custom button style with matching hover effect
  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 25px',
    color: '#329ec7',
    border: '2px solid #329ec7',
    borderRadius: '4px',
    fontWeight: 'bold',
    textAlign: 'center',
    minWidth: '150px',
    background: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontFamily: 'inherit',
    marginTop: '0',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease'
  };

  // Text styles from About section
  const mainTextStyle = {
    fontFamily: "'eurostile-condensed', sans-serif",
    fontWeight: 400,
    fontSize: '25px',
    letterSpacing: '0.2px',
    lineHeight: 1.3,
    textAlign: 'left',
    color: showParagraph ? '#293a8d' : 'white',
    transition: 'color 0.8s ease'
  };

  return (
    <div className="heart_section white_background">
      {/* Add the same hover effect CSS */}
      <style>
        {`
          .about2_content .btn2 {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
          }
          
          .about2_content .btn2:before {
            content: '';
            position: absolute;
            top: 0;
            left: -10px;
            width: 0;
            height: 100%;
            background-color: #329ec7;
            transition: all 0.3s ease;
            z-index: -1;
            transform: skewX(-20deg);
            opacity: 0;
          }
          
          .about2_content .btn2:hover {
            color: white !important;
            border-color: #329ec7 !important;
            box-shadow: 0 5px 15px rgba(50, 158, 199, 0.4) !important;
            transform: translateY(-3px) !important;
          }
          
          .about2_content .btn2:hover:before {
            width: 150%;
            opacity: 1;
          }
          
          /* Video placeholder styling */
          .video-placeholder {
            width: 100%;
            background-color: #f0f0f0;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }
          
          .video-container {
            position: relative;
            width: 100%;
            background-color: transparent;
            opacity: ${videoLoaded ? 1 : 0};
            transition: opacity 0.8s ease;
          }
          
          .video-container video {
            width: 100%;
            display: block;
          }
          
          .video-poster {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: ${showPoster ? 1 : 0};
            transition: opacity 0.3s ease;
            z-index: 1;
          }
        `}
      </style>
      
      {showContent ? (
        <div className="about2_content content-wrapper">
          <div className="typing-container">
            <h2 style={isMobile ? { textAlign: 'center', marginBottom: '5px' } : { marginBottom: '5px' }}>
              {props.paused === false ? (
                <Suspense fallback={"No Luck Needed"}>
                  <Typist key={typingKey} avgTypingDelay={100} cursor={{show: false}} style={{ marginBottom: '10px' }} onTypingDone={handleTypingComplete}>
                    <strong style={{ fontWeight: 900, letterSpacing: '0.5px' }}>No Luck Needed</strong>
                  </Typist>
                </Suspense>
              ) : (
                <div style={{ marginBottom: '10px' }}><strong style={{ fontWeight: 900, letterSpacing: '0.5px' }}>No Luck Needed</strong></div>
              )}
            </h2>
          </div>
          
          <div className="paragraph-content">
            {isMobile ? (
              <div style={{ position: 'relative' }}>
                <p style={{ 
                  marginBottom: '100px',
                  ...mainTextStyle,
                  fontSize: isMobile ? '22px' : '25px',
                  paddingLeft: isMobile ? '20px' : '0',
                  paddingRight: isMobile ? '20px' : '0'
                }}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <strong style={{ fontWeight: 600 }}>We don't roll the dice on design, and neither should you.</strong> Forget the templates. Skip the one-size-fits-all fixes. We bring strategy with soul, design with bite, and a kaleidoscopic team built to solve complex problems with bold ideas.
                  </Suspense>
                </p>
                <div style={{
                  position: 'absolute',
                  top: '210px',
                  left: 0,
                  right: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '12px'
                }}>
                  <p style={{ 
                    fontSize: '18px', 
                    marginBottom: '12px', 
                    color: '#293a8d', 
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}>
                    Ready to build something real?
                  </p>
                </div>
                <div style={{
                  position: 'absolute',
                  top: '250px',
                  left: 0,
                  right: 0,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <button 
                    onClick={() => navigateToSection('contact')} 
                    className="btn2" 
                    style={buttonStyle}
                  >
                    Let's talk.
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p style={mainTextStyle}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <strong style={{ fontWeight: 600 }}>We don't roll the dice on design, and neither should you.</strong> Forget the templates. Skip the one-size-fits-all fixes. We bring strategy with soul, design with bite, and a kaleidoscopic team built to solve complex problems with bold ideas.
                  </Suspense>
                </p>
                <div style={{ marginTop: '24px' }}>
                  <p style={{ 
                    fontSize: '18px', 
                    marginBottom: '12px', 
                    color: '#293a8d', 
                    fontWeight: 'bold' 
                  }}>
                    Ready to build something real?
                  </p>
                  <div className="button-container" style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    marginTop: '10px',
                    paddingLeft: '0'
                  }}>
                    <button 
                      onClick={() => navigateToSection('contact')} 
                      className="btn2" 
                      style={buttonStyle}
                    >
                      Let's talk.
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <DownArrow handleClick={props.arrowClick} />
    </div>
  );
}
