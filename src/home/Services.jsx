import { Grid, Image } from 'semantic-ui-react'
import Typist from 'react-typist'
import Button from '../components/button/button'
import Service from '../components/service'
import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default function Services(props, {paused}) {

    const history = useNavigate();

    const values = [
        { id: 1, title:'CONTENT', image:'./images/animations/social-media-girl.gif', text: "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software." },
        { id: 2, title:'BRANDING', image:'./images/animations/painting-guy.gif', text: "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software." },
        { id: 3, title:'STRATEGY', image:'./images/animations/drawing-guy.gif', text: "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software." },
        { id: 4, title:'WEB', image:'./images/animations/computer-guy.gif', text: "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software." }
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

        

        

            <div className="membership_wrapper container_full_width">

                
                    <div className="services">

              

                    {values.map((val,index) => (
                        <Service 
                        onClick={() => makeActive(val.id, val.title) }
                        paused={paused}
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


            </div>

        </div>
        )
    }