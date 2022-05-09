
import Service from '../components/service'
import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Services(props, {paused}) {

    const history = useNavigate();

    const values = [        
      { id: 3, title:'STRATEGY', image:'./images/animations/drawing-guy.gif', text: "Our strategy is simple; the path to connection is solely through authenticity, which, in some cases, lies where it began in the early fundamentals of design before it was called design it was called art. We operate on parallel perspectives of artistry, design, and development." },
        { id: 1, title:'CONTENT', image:'./images/animations/social-media-girl.gif', text: "With the pencil, keyboard, or camera in hand, we battle the epidemic of uninspired content regurgitating mediocrity through our world’s digital landscape. Our Club members retain on-demand access to the industry’s best photographers, screenwriters, media teams, and content creators." },
        { id: 4, title:'WEB', image:'./images/animations/computer-guy.gif', text: "We are at home speaking in code, and our signature homepages speak for themselves. We keep mediocrity out of our house and only admit members to purchase websites from our Club. Capitalize on the authenticity of your brand through a unique web experience unlike any." },
        { id: 2, title:'BRANDING', image:'./images/animations/painting-guy.gif', text: "Unlike many “one-size-fits-all” corporate agencies, we imbed artistry at the very foundation of our creative initiatives. Our kaleidoscopic mix of award-winning typographers, illustrators, designers, and brand identity consultants enables brands to be concrete in their authenticity." }
      ];

      const [activeId, setActiveId] = useState();
      
      const makeActive = (id, name) => {

        setActiveId(id);
        history('/'+name)

      }

      const removeActive = () => {

        setActiveId(null);
        history('/')

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
                        active={activeId === val.id && window.location.href.indexOf(val.title) > -1 || window.location.href.indexOf(val.title) > -1 ? true : false }
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
        


        </div>
        )
    }