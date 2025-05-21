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
                    <h2><strong style={{fontWeight: 900, letterSpacing: '1px'}}>HEARTS AT PLAY</strong></h2>
                   <p>

                   <Suspense fallback={<div>Loading...</div>}>

                       <Typist avgTypingDelay={.1}>
                       <b>We're fueled by projects with <strong style={{fontWeight: 900, letterSpacing: '0.5px'}}>meaning</strong> and people with <strong style={{fontWeight: 900, letterSpacing: '0.5px'}}>mission</strong>.</b> If you're building something that matters, we'd love to be part of it.
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
