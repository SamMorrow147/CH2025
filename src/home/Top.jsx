import Background from './Background';
import Alt_background from '../components/alt_background/Alt_background'

export default function Top({onClick}) {


    return (
        <div className="top_section">
        <Alt_background/>
        {/* <Background/> */}

            <div className="top_content">
                <img className="logo" src="./images/animated-logo.gif" />
                <img className="wordmark" src="./images/animated-wordmark.gif" />

                <div className="button_wrapper">
                    <a href="" className="button" >LOGIN</a>
                    <a href="#contact" className="button contact_us" onClick={onClick}>CONTACT US</a>
                </div>

            </div>
        </div>
    
    )
}
