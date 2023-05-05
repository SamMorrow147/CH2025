import City from '../animations/City.jsx'
import Background from './Background'
import React, {Suspense, lazy } from 'react';
import DownArrow from '../components/DownArrow.jsx';
const Typist = lazy(() => import('react-typist'));

export default function HeartSection(props) {

  




    return (    
        
        <div className="heart_section white_background">

            { props.paused === false ? <Background/> : '' }

            { props.paused === false ? 
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
    
                <City paused = {props.paused}/>

            </div> : <div></div> }
            <DownArrow handleClick={props.arrowClick}/>

        </div>
        )
    }
