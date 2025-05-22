import City from '../animations/City.jsx'
import Background from './Background'
import React, {Suspense, lazy, useState, useEffect } from 'react';
import DownArrow from '../components/DownArrow.jsx';
const Typist = lazy(() => import('react-typist'));

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

            { props.paused === false ? <Background/> : '' }

            { props.paused === false ? 
            <div className="heart_wrapper container">

                <div className="heart_content">
                    <h2><strong style={{fontWeight: 900, letterSpacing: '1px'}}>HEARTS AT PLAY</strong></h2>
                   <p style={{
                       fontSize: isMobile ? '23px' : '28px', 
                       lineHeight: isMobile ? 1 : 1.3, 
                       fontFamily: isMobile ? "'eurostile-condensed', sans-serif" : "'eurostile', sans-serif"
                   }}>

                   <Suspense fallback={<div>Loading...</div>}>

                       <Typist avgTypingDelay={.1}>
                       <b>We're fueled by projects with <strong style={{fontWeight: 900, letterSpacing: '0.5px'}}>meaning</strong> and people with <strong style={{fontWeight: 900, letterSpacing: '0.5px'}}>mission</strong>.</b> We're selective with our partners and intentional with our work. The best work comes from a state of play, and the best clients come from a place of heart.
                        </Typist>
                    </Suspense>

                        </p> 
                      
                  
                </div>
    
                <City paused = {props.paused}/>

            </div> : <div></div> }
            <DownArrow handleClick={props.arrowClick}/>

        </div>
        )
    }
