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
              setShowContent(true);
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
                                setShowContent(true);
                                setShowPoster(false);
                            });
                      } else {
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
      <style>
        {`
          .heart_section {
            width: 100vw;
            min-height: 100vh;
            position: relative;
            overflow: visible;
            margin: 0;
            padding: 0;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
          }

          .about2_content {
            position: relative;
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 20px 73px;
            max-width: 1600px;
            margin: 0 auto;
          }
          
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
          
          .video-container {
            position: relative;
            width: 45%;
            max-width: 45%;
            background-color: transparent;
            opacity: ${videoLoaded ? 1 : 0};
            transition: opacity 0.8s ease;
          }
          
          .video-container video {
            width: 100%;
            display: block;
            object-fit: contain;
          }
          
          .content-wrapper {
            position: relative;
            z-index: 1;
            width: 50%;
            max-width: 50%;
            padding-left: 40px;
          }
          
          .typing-container {
            margin-bottom: 30px;
            width: 100%;
          }
          
          .typing-container h2 {
            font-size: clamp(42px, 12vw, 80px);
            line-height: 1;
            margin-bottom: 20px;
            color: #293a8d;
            font-family: 'eurostile-condensed', sans-serif;
            font-weight: bold;
          }
          
          .paragraph-content {
            width: 100%;
            opacity: ${showParagraph ? 1 : 0};
            transform: translateY(${showParagraph ? '0' : '20px'});
            transition: all 0.8s ease;
          }
          
          @media (max-width: 768px) {
            .about2_content {
              flex-direction: column;
              padding: 73px 20px;
              height: auto;
              min-height: 100vh;
            }
            
            .video-container {
              width: 100%;
              max-width: 100%;
              margin-bottom: 40px;
            }
            
            .content-wrapper {
              width: 100%;
              max-width: 100%;
              padding-left: 0;
            }
            
            .typing-container h2 {
              text-align: center;
            }
            
            .paragraph-content {
              text-align: center;
            }
          }
        `}
      </style>
      
      {showContent && (
        <div className="about2_content">
          {!isMobileSafari && (
            <div className="video-container">
              {shouldLoadVideo && (
                <video 
                  ref={videoRef}
                  muted
                  playsInline
                  autoPlay
                  preload={isSafari ? "auto" : "metadata"}
                  onLoadedData={handleVideoLoaded}
                >
                  <source src="/videos/Clubhaus.mp4" type="video/mp4" />
                </video>
              )}
            </div>
          )}
          
          <div className="content-wrapper">
            <div className="typing-container">
              <h2>
                {props.paused === false ? (
                  <Suspense fallback={"No Luck Needed"}>
                    <Typist key={typingKey} avgTypingDelay={100} cursor={{show: false}} onTypingDone={handleTypingComplete}>
                      <strong>No Luck Needed</strong>
                    </Typist>
                  </Suspense>
                ) : (
                  <strong>No Luck Needed</strong>
                )}
              </h2>
            </div>
            
            <div className="paragraph-content">
              {isMobile ? (
                <div>
                  <p style={{ 
                    ...mainTextStyle,
                    fontSize: '22px',
                    marginBottom: '40px'
                  }}>
                    <strong style={{ fontWeight: 600 }}>We don't roll the dice on design, and neither should you.</strong> Forget the templates. Skip the one-size-fits-all fixes. We bring strategy with soul, design with bite, and a kaleidoscopic team built to solve complex problems with bold ideas.
                  </p>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ 
                      fontSize: '18px', 
                      marginBottom: '12px', 
                      color: '#293a8d', 
                      fontWeight: 'bold',
                      minHeight: '10px'
                    }}>
                      Ready to build something real?
                    </p>
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
                    <strong style={{ fontWeight: 600 }}>We don't roll the dice on design, and neither should you.</strong> Forget the templates. Skip the one-size-fits-all fixes. We bring strategy with soul, design with bite, and a kaleidoscopic team built to solve complex problems with bold ideas.
                  </p>
                  <div style={{ marginTop: '24px' }}>
                    <p style={{ 
                      fontSize: '18px', 
                      marginBottom: '12px', 
                      color: '#293a8d', 
                      fontWeight: 'bold',
                      minHeight: '10px'
                    }}>
                      Ready to build something real?
                    </p>
                    <button 
                      onClick={() => navigateToSection('contact')} 
                      className="btn2" 
                      style={buttonStyle}
                    >
                      Let's talk.
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <DownArrow handleClick={props.arrowClick} />
    </div>
  );
}
