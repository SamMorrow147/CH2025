import Alt_background from '../components/alt_background/Alt_background'
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';


export default function Top({currentScroll,arrowClick}) {
    // Reference to the top_content container for accessing its children
    const contentRef = useRef(null);
    const prevScrollRef = useRef(currentScroll);
    const [logoKey, setLogoKey] = useState(Date.now()); // Add key to force reload
    
    // Initial load animation effect
    useEffect(() => {
        // On initial component mount, force the GIF to reload
        setTimeout(() => {
            setLogoKey(Date.now());
        }, 100);
    }, []);
    
    // Watch for changes in currentScroll to detect returning to the top section 
    useEffect(() => {
        // If we're coming back to the first section from another section, 
        // reload the logo animation
        if (currentScroll === 0 && prevScrollRef.current !== 0) {
            // Force reload by changing the key
            setLogoKey(Date.now());
        }
        
        // Update the previous scroll position
        prevScrollRef.current = currentScroll;
    }, [currentScroll]);

    function isEven(n) {
        return n % 2 == 0;
    }
    
    return (
        <div className="top_section">
            <Alt_background arrowClick={arrowClick}/>
            
            <div 
                ref={contentRef}
                className={`${isEven(currentScroll) && currentScroll != 0 ? 'top_content even' : 'top_content'}`}
            >
                {/* Use key to force reload of GIF and ensure Safari displays animation */}
                <img 
                    key={logoKey}
                    className="logo" 
                    width="220" 
                    height="220" 
                    src={`./images/animated-logo.gif?v=${logoKey}`} 
                />
                    
                <img 
                    className="wordmark" 
                    height="200" 
                    width="600" 
                    src={isEven(currentScroll) && currentScroll != 0 ? '../images/wordmark.png' : '../images/wordmark_white.png'} 
                />  
              
                <div className="button_wrapper">
                    <p>YOU'RE IN GOOD HANDS</p>
                </div>
            </div>
        </div>
    )
}
