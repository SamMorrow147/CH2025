import City from '../animations/City'
import Background from './Background'
import Typist from 'react-typist'

export default function HeartSection({paused}) {
    return (    
        <div className="heart_section white_background">

            <Background/>

            <div className="heart_wrapper container">

                <div className="heart_content">
                    <h2>OUR HEARTS MEMBERSHIP INITIATIVE</h2>
                    { paused ? <p></p>  : <p><Typist avgTypingDelay={.1}>
                             We Uplift business &  partner with people who want To design a better future. Let’s talk about how we can help you help.
                        </Typist></p> }
                
                </div>
    
                <City paused = {paused}/>

            </div>

        </div>
        )
    }