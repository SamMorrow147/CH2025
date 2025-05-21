import City from '../animations/City.jsx'
import Background from './Background'
import React, { Suspense, lazy, useState, useEffect } from 'react';
import DownArrow from '../components/DownArrow.jsx';
const Typist = lazy(() => import('react-typist'));

export default function AboutTwo(props) {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  // Track window width for responsive design
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [typingKey, setTypingKey] = useState(0);
  
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
      }
      // Update the ref with current paused state
      prevPausedRef.current = props.paused;
  }, [props.paused]);
  
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
        `}
      </style>
      
      {props.paused === false ? <Background white={true} /> : ''}
      {props.paused === false ? (
        <div className="content_wrapper container">
          <div className="video" style={{ width: '100%' }}>
            {isIOS ? (
              <img src="images/Rotate.gif" style={{ width: '100%' }} />
            ) : (
              <video preload="auto" autoPlay={true} muted>
                <source src="/videos/Clubhaus.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <div className="about2_content">
            <h2>
              {props.paused === false ? (
                <Suspense fallback={"No Luck Needed"}>
                  <Typist key={typingKey} avgTypingDelay={100} cursor={{show: false}}>
                    No Luck Needed
                  </Typist>
                </Suspense>
              ) : (
                "No Luck Needed"
              )}
            </h2>
            <h3 style={{ color: '#293a8d', marginBottom: '15px' }}>We don't roll the dice on design, and neither should you.</h3>
            
            {isMobile ? (
              // Mobile layout with absolute positioning
              <div style={{ position: 'relative' }}>
                <p style={{ marginBottom: '90px' }}>
                  <Suspense fallback={<div>Loading...</div>}>
                    Forget the templates. Skip the one-size-fits-all fixes. We bring strategy with soul, design with bite, and a kaleidoscopic team built to solve complex problems with bold ideas.
                  </Suspense>
                </p>
                <div style={{
                  position: 'absolute',
                  top: '90px',
                  left: 0,
                  right: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '15px'
                }}>
                  <p style={{ 
                    fontSize: '18px', 
                    marginBottom: '15px', 
                    color: '#293a8d', 
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}>
                    Ready to build something real?
                  </p>
                </div>
                <div style={{
                  position: 'absolute',
                  top: '130px',
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
                <p>
                  <Suspense fallback={<div>Loading...</div>}>
                    Forget the templates. Skip the one-size-fits-all fixes. We bring strategy with soul, design with bite, and a kaleidoscopic team built to solve complex problems with bold ideas.
                  </Suspense>
                </p>
                <div style={{ marginTop: '30px' }}>
                  <p style={{ 
                    fontSize: '18px', 
                    marginBottom: '15px', 
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
