import Background from "./Background"
import Typist from 'react-typist';

export default function Agency({paused}) {
    return (    
        <div className="agency_section">
            
              <div className="agency_wrapper container">

                <div className="agency_content">
                    <h2>WE ARE NOT YOUR AVERAGE AGENCY.</h2>
                   
                    { paused ? <p></p>  : <p><Typist avgTypingDelay='.1'>
                        Our leaders pioneered the modern decentralized agency structure. We leverage top tier creative strategists from around the  globe and accelerate tomorrows businesses with a files in the cloud approach. 
                        </Typist></p> }
                       

                    
                </div>

                <div className="cross-out">
                    <img src="./images/no-way.png" className="no-way" />
                    <img src="./images/logo.webp" className="white-logo" />
                </div>

            </div>

        </div>
        )
    }