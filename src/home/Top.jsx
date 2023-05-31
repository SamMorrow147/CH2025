import Alt_background from '../components/alt_background/Alt_background'
import { Link } from 'react-router-dom';


export default function Top({currentScroll,arrowClick}) {


    function isEven(n) {
        return n % 2 == 0;
     }
      // loads the script for the city animation at the bottom, this helps with load time.

    return (
        <div className="top_section">
        <Alt_background arrowClick={arrowClick}/>
        {/* <Background/> */}

            <div className={`${isEven(currentScroll) && currentScroll != 0 ? 'top_content even' : 'top_content'} ${currentScroll != 0 ? 'active-bar' : ''}`}>
                <img className="logo" width="220" height="220" src="./images/animated-logo.gif" />
                    
    

                <img className="wordmark" height="200" width="600" src={isEven(currentScroll)  && currentScroll != 0 ? '../images/wordmark.png' : '../images/wordmark_white.png'} />  
              
                <div className="button_wrapper">
                    <p>YOU'RE IN GOOD HANDS</p>
                </div>

            </div>
        </div>
    
    )
}
