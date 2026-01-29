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
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showGifFallback, setShowGifFallback] = useState(false);
  const [gifSrc, setGifSrc] = useState('/images/Rotate.gif');
  const videoRef = useRef(null);
  
  // Track previous paused state to detect changes
  const prevPausedRef = React.useRef(true);
  
  // Force GIF reload function (specifically for video fallback)
  const reloadClubhausGif = () => {
    setGifSrc('/images/Rotate.gif?' + Date.now());
  };
    
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
              // Reset all states for first visit
              setTypingKey(k => k + 1);
              setShowContent(true);
              setHasVisited(true);
          }
          
          // Always start video sequence when section becomes visible
          setShouldLoadVideo(true);
          setVideoLoaded(false); // Reset video loaded state
          
          // For Safari mobile, immediately fallback to GIF since autoplay is typically blocked
          if (isMobileSafari) {
              setShowGifFallback(true);
              reloadClubhausGif();
          } else {
              setShowGifFallback(false);
          }
          
          // Reset and play video if it exists
          if (videoRef.current) {
              videoRef.current.currentTime = 0;
              videoRef.current.load(); // Force reload the video
              const playPromise = videoRef.current.play();
              if (playPromise !== undefined) {
                  playPromise
                      .then(() => {
                          setShowContent(true);
                          setShowGifFallback(false); // Ensure GIF is hidden when video plays
                      })
                      .catch(err => {
                          console.error("Video autoplay failed, falling back to GIF:", err);
                          setShowGifFallback(true);
                          setShowContent(true);
                          reloadClubhausGif();
                      });
              }
          }
      }
      // Update the ref with current paused state
      prevPausedRef.current = props.paused;
  }, [props.paused, hasVisited, isMobileSafari, gifSrc]);
  
  // Handle typing completion
  const handleTypingComplete = () => {
    // Add delay before showing paragraph
    setTimeout(() => {
      setShowParagraph(true);
    }, 800);
  };
  
  // Handle delayed video loading for better performance
  useEffect(() => {
      if (!shouldLoadVideo) return;
      
      // Load and play video with a slight delay for better performance
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
                                setShowContent(true);
                                setShowGifFallback(false); // Ensure GIF is hidden when video plays
                            })
                            .catch(err => {
                                console.error("Video autoplay failed in delayed loading, falling back to GIF:", err);
                                setShowGifFallback(true);
                                setShowContent(true);
                                reloadClubhausGif();
                            });
                      } else {
                          setShowContent(true);
                      }
                  }
              }, isSafari ? 300 : 100);
              
              return () => clearTimeout(playTimer);
          }
      }, 100);
      
      return () => clearTimeout(loadTimer);
  }, [shouldLoadVideo, isSafari]);

  // Handle video loaded event
  const handleVideoLoaded = () => {
      setVideoLoaded(true);
      if (videoRef.current) {
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
              playPromise
                  .then(() => {
                      setShowContent(true);
                      setShowGifFallback(false); // Ensure GIF is hidden when video plays
                  })
                  .catch(err => {
                      console.error("Video autoplay failed after load, falling back to GIF:", err);
                      setShowGifFallback(true);  
                      setShowContent(true);
                      reloadClubhausGif();
                  });
          }
      }
  };

  const navigateToSection = (section) => {
      if (window.fullpage_api) {
          if (section === 'contact') {
              window.fullpage_api.moveTo(8);
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

          .fp-viewing-sixth .heart_content {
            margin-top: -200px;
            margin-left: 0;
          }

          .about2_content {
            position: relative;
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 63px 73px;
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
            opacity: ${videoLoaded || showGifFallback ? 1 : 0};
            transition: opacity 0.8s ease;
            margin-top: 1px;
            ${isMobileSafari ? `
              margin-top: 80px;
              transform: translateY(0);
              -webkit-transform: translateY(0);
            ` : ''}
          }
          
          .video-container video {
            width: 100%;
            display: block;
            object-fit: contain;
            ${isMobileSafari ? `
              -webkit-transform: translateZ(0);
              transform: translateZ(0);
              backface-visibility: hidden;
              -webkit-backface-visibility: hidden;
            ` : ''}
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
            word-wrap: break-word;
            white-space: normal;
            width: 100%;
          }
          
          .paragraph-content {
            width: 100%;
            opacity: ${showParagraph ? 1 : 0};
            transform: translateY(${showParagraph ? '0' : '20px'});
            transition: all 0.8s ease;
          }
          
          @media (max-width: 768px) {
            .about2_content {
              flex-direction: column !important;
              padding: 63px 20px !important;
              height: auto !important;
              min-height: 0 !important;
              ${isMobileSafari ? `
                padding: 63px 20px !important;
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                justify-content: flex-start !important;
              ` : ''}
            }
            
            .video-container {
              width: 100%;
              max-width: 100%;
              margin-bottom: 0;
              margin-top: 0;
              position: relative;
              z-index: 1;
              /* Add minimum height to prevent layout shift */
              min-height: 150px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            
            .content-wrapper {
              width: 100%;
              max-width: 100%;
              padding-left: 0;
              ${isMobileSafari ? `
                margin-top: 20px;
                position: relative;
                z-index: 2;
              ` : ''}
            }
            
            .typing-container {
              margin-bottom: 0;
            }
            
            .typing-container h2 {
              text-align: center;
              line-height: 1.2;
              font-size: clamp(32px, 8vw, 60px);
              word-break: break-word;
              padding: 0 10px;
            }
            
            .paragraph-content {
              text-align: center;
            }

            .paragraph-content p {
              min-height: auto !important;
            }
          }
        `}
      </style>
      
      {showContent && (
        <div className="about2_content">
          <div className="video-container">
            {shouldLoadVideo && !showGifFallback && (
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
            {showGifFallback && (
              <img 
                src={gifSrc}
                alt="ClubHaus Animation"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  objectFit: 'contain'
                }}
              />
            )}
          </div>
          
          <div className="content-wrapper">
            <div className="typing-container">
              <h1 style={{ margin: 0, padding: 0 }}>
                {props.paused === false ? (
                  <Suspense fallback={"No Luck Needed"}>
                    <Typist key={typingKey} avgTypingDelay={100} cursor={{show: false}} onTypingDone={handleTypingComplete}>
                      <strong>No Luck Needed</strong>
                    </Typist>
                  </Suspense>
                ) : (
                  <strong>No Luck Needed</strong>
                )}
              </h1>
            </div>
            
            <div className="paragraph-content">
              {isMobile ? (
                <div>
                  <p style={{ 
                    ...mainTextStyle,
                    fontSize: '22px',
                    marginBottom: '0px',
                    minHeight: 'auto'
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