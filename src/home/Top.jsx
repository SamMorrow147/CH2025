import Background from './Background';
import Alt_background from '../components/alt_background/Alt_background'
import { Link } from 'react-router-dom';

export default function Top({currentScroll}) {


    function isEven(n) {
        return n % 2 == 0;
     }
    return (
        <div className="top_section">
        <Alt_background/>
        {/* <Background/> */}

            <div className={`${isEven(currentScroll) && currentScroll != 0 ? 'top_content even' : 'top_content'} ${currentScroll != 0 ? 'active-bar' : ''}`}>
                <img className="logo" src="./images/animated-logo.gif" />

                <img className="wordmark" src={isEven(currentScroll)  && currentScroll != 0 ? '../images/wordmark.png' : '../images/wordmark_white.png'} />  
              
                <div className="button_wrapper">
                    <a href="" className="button" >LOGIN</a>
                    <Link className="button" to='/contact'>
                                           CONTACT US
                    </Link>
                </div>

            </div>
        </div>
    
    )
}
