import Alt_background from '../components/alt_background/Alt_background'
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';


export default function Top({currentScroll,arrowClick}) {
    // Reference to the top_content container for accessing its children
    const contentRef = useRef(null);
    const prevScrollRef = useRef(currentScroll);

    // Watch for changes in currentScroll to detect returning to the top section
    useEffect(() => {
        // If we're coming back to the first section from another section
        if (currentScroll === 0 && prevScrollRef.current !== 0) {
            // Get the container
            const container = contentRef.current;
            if (container) {
                // Find the logo image (first img element)
                const logoImg = container.querySelector('img.logo');
                if (logoImg) {
                    // Create a brand new image element with identical properties
                    const newImage = document.createElement('img');
                    newImage.className = 'logo';
                    newImage.width = 220;
                    newImage.height = 220;
                    newImage.src = './images/animated-logo.gif?reload=' + new Date().getTime();
                    
                    // Replace the old image with the new one
                    container.replaceChild(newImage, logoImg);
                }
            }
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
                className={`${isEven(currentScroll) && currentScroll != 0 ? 'top_content even' : 'top_content'} ${currentScroll != 0 ? 'active-bar' : ''}`}
            >
                {/* Keep the original structure with direct img children */}
                <img 
                    className="logo" 
                    width="220" 
                    height="220" 
                    src="./images/animated-logo.gif" 
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
