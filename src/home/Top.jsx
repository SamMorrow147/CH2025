import Alt_background from '../components/alt_background/Alt_background'
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';


export default function Top({currentScroll,arrowClick}) {
    // Reference to the top_content container for accessing its children
    const contentRef = useRef(null);
    const prevScrollRef = useRef(currentScroll);
    const [logoKey, setLogoKey] = useState(Date.now()); // Key for logo animation control
    
    // Initial load animation effect - only runs once on component mount
    useEffect(() => {
        // On initial component mount, force the GIF to reload
        setTimeout(() => {
            setLogoKey(Date.now());
        }, 100);
    }, []);
    
    // Only reload the logo animation when actually changing sections
    useEffect(() => {
        // Only reload animation when moving between actual sections,
        // not when toggling menu or other UI interactions
        if (currentScroll === 0 && prevScrollRef.current !== 0) {
            // Coming back to the home section (section 0) from another section
            setTimeout(() => {
                setLogoKey(Date.now());
            }, 50);
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
                    src="./images/animated-logo.gif"  // Remove the dynamic query parameter
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
