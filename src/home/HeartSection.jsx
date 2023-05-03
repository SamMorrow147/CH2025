import City from '../animations/City.jsx'
import Background from './Background'
import React, {Suspense, lazy } from 'react';

const Typist = lazy(() => import('react-typist'));

export default function HeartSection({paused}) {

  




    return (    
        
        <div className="heart_section white_background">

            { paused === false ? <Background/> : '' }

            { paused === false ? 
            <div className="heart_wrapper container">

                <div className="heart_content">
                    <h2>OUR HEARTS MEMBERSHIP INITIATIVE</h2>
                   <p>

                   <Suspense fallback={<div>Loading...</div>}>

                       <Typist avgTypingDelay={.1}>
                       We partner with businesses who make an <b>art</b> out of philanthropy & are on mission to design <b>a better future</b>.
                        </Typist>
                    </Suspense>

                        </p> 
                      
                  
                </div>
    
                <City paused = {paused}/>

            </div> : <div></div> }

        </div>
        )
    }
