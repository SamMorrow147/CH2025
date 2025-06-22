import City from '../animations/City.jsx'
import Background from './Background'
import React, {Suspense, lazy, useState, useEffect } from 'react';
import DownArrow from '../components/DownArrow.jsx';
const Typist = lazy(() => import('react-typist'));

// Add global CSS for heart section
const heartSectionStyles = `
  .heart_section {
    overflow-x: hidden !important;
    overflow-y: hidden !important;
    height: 100vh !important;
    max-height: 100vh !important;
  }
  
  .heart_wrapper {
    overflow-x: hidden !important;
    overflow-y: hidden !important;
    height: 100% !important;
    max-height: 100vh !important;
  }
  
  .heart_content {
    overflow-x: hidden !important;
    overflow-y: hidden !important;
    height: 100% !important;
    max-height: 100vh !important;
  }

  .heart_title {
    color: #293a8d;
    font-size: clamp(36px, 8vw, 80px) !important;
    line-height: 1.2;
    margin-bottom: 20px;
    animation: none !important;
    transition: none !important;
    opacity: 1 !important;
    font-family: 'eurostile-condensed', sans-serif !important;
    font-weight: bold !important;
    white-space: normal;
    word-wrap: break-word;
    text-align: center;
    padding: 0 10px;
  }

  .heart_title strong {
    font-weight: bold !important;
    letter-spacing: 1px;
    animation: none !important;
    transition: none !important;
    opacity: 1 !important;
    font-family: 'eurostile-condensed', sans-serif !important;
    font-size: inherit !important;
    display: inline-block;
    width: 100%;
  }

  @media (max-width: 768px) {
    .heart_title {
      font-size: clamp(32px, 6vw, 60px) !important;
      line-height: 1.3;
      margin-bottom: 15px;
    }
  }

  @media (max-width: 400px) {
    .heart_title {
      font-size: clamp(28px, 5vw, 40px) !important;
      line-height: 1.4;
    }
  }

  @media (min-width: 769px) {
    .fp-viewing-sixth .container {
      padding-top: 130px;
    }
  }

  @media (min-width: 401px) {
    .fp-viewing-sixth .heart_content {
      margin-top: -30px;
    }
  }
`;

export default function HeartSection(props) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
    // Add window resize listener to track device size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        window.addEventListener('resize', handleResize);
        
        // Clean up event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (    
        <div className="heart_section white_background">
            {/* Include the heart section styles */}
            <style dangerouslySetInnerHTML={{ __html: heartSectionStyles }} />
            
            { props.paused === false ? <Background/> : '' }

            { props.paused === false ? 
            <div className="heart_wrapper container">
                <div className="heart_content">
                    <div className="heart_title">
                        {props.paused === false ? (
                            <Suspense fallback={"HEARTS AT PLAY"}>
                                <Typist avgTypingDelay={100} cursor={{show: false}}>
                                    <strong style={{fontWeight: 900, letterSpacing: '1px'}}>HEARTS AT PLAY</strong>
                                </Typist>
                            </Suspense>
                        ) : (
                            <strong style={{fontWeight: 900, letterSpacing: '1px'}}>HEARTS AT PLAY</strong>
                        )}
                    </div>
                    <div className="heart_paragraph">
                        <p style={{
                            fontSize: isMobile ? '23px' : '28px', 
                            lineHeight: isMobile ? 1 : 1.3, 
                            fontFamily: isMobile ? "'eurostile-condensed', sans-serif" : "'eurostile', sans-serif"
                        }}>
                            <b>We're fueled by projects with <strong style={{fontWeight: 900, letterSpacing: '0.5px'}}>meaning</strong> and people with <strong style={{fontWeight: 900, letterSpacing: '0.5px'}}>mission</strong>.</b> We're selective with our partners and intentional with our work. The best work comes from a state of play, and the best clients come from a place of heart.
                        </p>
                    </div>
                </div>
                <City paused = {props.paused}/>
            </div> : <div></div> }
            <DownArrow handleClick={props.arrowClick}/>
        </div>
    )
}
