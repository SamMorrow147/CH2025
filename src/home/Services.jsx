import Service from '../components/service'
import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DownArrow from '../components/DownArrow';


export default function Services(props) {




  
    const history = useNavigate();  

    const values = [        
      { id: 1, title:'STRATEGY', image:'./images/animations/drawing-guy.gif', text: "We think before we build. Our strategy work combines real-world insight with design intelligence to help brands grow with purpose. From user experience frameworks to scalable eCommerce architecture, <strong>we develop systems that connect, convert, and evolve.</strong>" },
        { id: 2, title:'CONTENT', image:'./images/animations/social-media-girl.gif', text: "We create with intent. From campaign concepts and photography to branded video and social storytelling, we help brands show up with consistency and character. <strong>The result? Content that earns attention and keeps it.</strong>" },
        { id: 3, title:'WEB', image:'./images/animations/computer-guy.gif', text: "We create digital experiences tailored to your brand and your audience. From custom WordPress sites to app interfaces, we design immersive platforms with animation, smooth navigation, and visual flow. <strong>Each site is a functional work of art made to captivate and connect.</strong>" },
        { id: 4, title:'BRANDING', image:'./images/animations/painting-guy.gif', text: "We build brands that stand apart and stay there. While others chase trends, we dig deeper. We craft identities that cut through noise and challenge the norm. <strong>Our ideas might sit outside the lines, but they're built to last and made to lead.</strong>" }
      ];

      
      const makeActive = (id, name) => {

        
     
        props.onNameChange(id)
      }

      const removeActive = () => {

        history('/')
        props.onNameChange('')

      }
    

    return (    
        <div className="services_section">

        
          {props.paused == false ?  
          
            <div className="membership_wrapper container_full_width">

                
                    <div className="services">

              

                    {values.map((val,index) => (
                        <Service 
                        onClick={() => makeActive(val.id, val.title) }
                        paused={props.paused}
                        active={props.activeId === val.id ? true : false }
                        title={val.title}
                        text={val.text}
                        image={val.image}
                        key={index}
                        link='/contact'
                        goBack={() => removeActive() }
                        />

                        ))}
                       

                   </div>


            </div> : <div></div> }
        
            <DownArrow handleClick={props.arrowClick}/>


        </div>
        )
    }