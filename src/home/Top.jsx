import AltBackground from '../components/alt_background/Alt_background'
import { useEffect, useRef, useState } from 'react';


export default function Top({currentScroll,arrowClick}) {
    // Reference to the top_content container for accessing its children
    const contentRef = useRef(null);
    const prevScrollRef = useRef(currentScroll);
    const [gifSrc, setGifSrc] = useState('/images/animated-logo.gif');
    
    // Force GIF reload on mount and section changes
    const reloadGif = () => {
        setGifSrc('/images/animated-logo.gif?' + Date.now());
    };
    
    useEffect(() => {
        reloadGif();
    }, []);
    
    useEffect(() => {
        if (currentScroll === 0 && prevScrollRef.current !== 0) {
            reloadGif();
        }
        prevScrollRef.current = currentScroll;
    }, [currentScroll]);

    function isEven(n) {
        return n % 2 === 0;
    }
    
    return (
        <div className="top_section">
            <AltBackground arrowClick={arrowClick}/>
            
            <div 
                ref={contentRef}
                className={`${isEven(currentScroll) && currentScroll !== 0 ? 'top_content even' : 'top_content'}`}
            >
                <img 
                    className="logo" 
                    width="220" 
                    height="220" 
                    src={gifSrc}
                    alt="ClubHaus Logo"
                />
                    
                <img 
                    className="wordmark" 
                    height="200" 
                    width="600" 
                    src={isEven(currentScroll) && currentScroll !== 0 ? '../images/wordmark.png' : '../images/wordmark_white.png'} 
                    alt="ClubHaus Wordmark"
                />  
              
                <div className="button_wrapper">
                    <p>YOU'RE IN GOOD HANDS</p>
                </div>
            </div>
        </div>
    )
}
