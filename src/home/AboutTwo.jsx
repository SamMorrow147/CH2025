import City from '../animations/City.jsx'
import Background from './Background'
import React, { Suspense, lazy, useState, useEffect, useRef } from 'react';
import DownArrow from '../components/DownArrow.jsx';
const Typist = lazy(() => import('react-typist'));

export default function AboutTwo(props) {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  // Track window width for responsive design
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [typingKey, setTypingKey] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [showPoster, setShowPoster] = useState(true);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false);
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
  
  // Reset typing animation when section becomes visible
  useEffect(() => {
      if (prevPausedRef.current === true && props.paused === false) {
          // Section just became visible, restart the typing animation
          setTypingKey(k => k + 1);
          
          // Signal that video should be loaded
          setShouldLoadVideo(true);
      }
      // Update the ref with current paused state
      prevPausedRef.current = props.paused;
  }, [props.paused]);
  
  // Handle delayed video loading for better performance
  useEffect(() => {
      if (!shouldLoadVideo || isIOS) return;
      
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
                                // Hide poster after video starts playing
                                setTimeout(() => {
                                    setShowPoster(false);
                                }, 300);
                            })
                            .catch(err => {
                                console.error("Error playing video:", err);
                                
                                // Safari sometimes needs a second attempt
                                if (isSafari) {
                                    setTimeout(() => {
                                        if (videoRef.current) {
                                            videoRef.current.play()
                                                .then(() => {
                                                    setVideoPlaying(true);
                                                    setTimeout(() => setShowPoster(false), 300);
                                                })
                                                .catch(e => {
                                                    console.error("Second play attempt failed:", e);
                                                    
                                                    // If Safari still fails, use a different approach
                                                    setTimeout(() => {
                                                        if (videoRef.current) {
                                                            // Force reload and immediate play attempt
                                                            videoRef.current.load();
                                                            videoRef.current.play();
                                                            // Just hide the poster anyway
                                                            setVideoPlaying(true);
                                                            setShowPoster(false);
                                                        }
                                                    }, 800);
                                                });
                                        }
                                    }, 500);
                                }
                            });
                      } else {
                          // Fallback for browsers where play() doesn't return a promise
                          setVideoPlaying(true);
                          setTimeout(() => {
                              setShowPoster(false);
                          }, 500);
                      }
                  }
              }, isSafari ? 300 : 100);
              
              return () => clearTimeout(playTimer);
          }
      }, 100);
      
      return () => clearTimeout(loadTimer);
  }, [shouldLoadVideo, isSafari, isIOS]);

  // Handle video loaded event
  const handleVideoLoaded = () => {
      setVideoLoaded(true);
      // Don't hide poster yet - wait for play to succeed
  };

  const navigateToSection = (section) => {
      // Navigate to the contact section
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
    textAlign: 'left'
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
            object-fit: cover;
            z-index: 2;
            transition: opacity 0.4s ease;
            background-color: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          /* Add fade-in animation */
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          
          .content_wrapper {
            animation: fadeIn 0.5s ease-in-out;
          }
          
          /* Video loading animation */
          @keyframes videoLoading {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          .video-loading-indicator {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: rgba(255, 255, 255, 0.1);
            overflow: hidden;
            z-index: 3;
          }
          
          .video-loading-indicator::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            background-color: rgba(50, 158, 199, 0.6);
            animation: videoLoading 1.5s infinite linear;
          }
        `}
      </style>
      
      {props.paused === false ? <Background white={true} /> : ''}
      {props.paused === false ? (
        <div className="content_wrapper container">
          <div className="video-container" style={{ width: '100%' }}>
            {isIOS ? (
              <img src="images/Rotate.gif" style={{ width: '100%' }} alt="Animation" />
            ) : (
              <>
                {/* Video poster that stays visible until video plays */}
                {showPoster && (
                  <div className="video-poster" style={{ opacity: showPoster ? 1 : 0 }}>
                    <img 
                      ref={posterRef}
                      src="/images/ClubhausFirstFrame.jpg" 
                      alt="Video thumbnail" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        opacity: posterLoaded ? 1 : 0,
                        transition: 'opacity 0.3s ease'
                      }}
                      onLoad={() => setPosterLoaded(true)}
                    />
                    {!videoPlaying && <div className="video-loading-indicator"></div>}
                  </div>
                )}
                
                {shouldLoadVideo && (
                  <video 
                    ref={videoRef}
                    muted
                    playsInline
                    autoPlay
                    preload={isSafari ? "auto" : "metadata"}
                    onLoadedData={handleVideoLoaded}
                    style={{ 
                      width: '100%',
                      opacity: videoLoaded ? 1 : 0,
                      transition: 'opacity 0.8s ease',
                      zIndex: 1
                    }}
                  >
                    <source src="/videos/Clubhaus.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </>
            )}
          </div>
          <div className="about2_content">
            <h2 style={isMobile ? { textAlign: 'center', marginBottom: '5px' } : { marginBottom: '5px' }}>
              {props.paused === false ? (
                <Suspense fallback={"No Luck Needed"}>
                  <Typist key={typingKey} avgTypingDelay={100} cursor={{show: false}} style={{ marginBottom: '10px' }}>
                    No Luck Needed
                  </Typist>
                </Suspense>
              ) : (
                <div style={{ marginBottom: '10px' }}>No Luck Needed</div>
              )}
            </h2>
            
            {isMobile ? (
              // Mobile layout with absolute positioning
              <div style={{ position: 'relative' }}>
                <p style={{ 
                  marginBottom: '100px',
                  ...mainTextStyle,
                  fontSize: isMobile ? '22px' : '25px' 
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
              // Desktop layout with left-aligned button
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
