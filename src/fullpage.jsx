
import Top from './home/Top'
import ReactFullpage from '@fullpage/react-fullpage';
import About from './home/About'
import AnimateCC, { GetAnimationObjectParameter } from "react-adobe-animate";
import Menu from './Menu';
import Heart_section from './home/Heart_section'
import Contact from './home/Contact';
import Contact_fixed from './home/Contact_fixed';
import React, { Component, useEffect, useState } from 'react';
import Agency from './home/Agency'
import Icons from './home/Icons'
import New_top from './home/New_top'
import Membership from './home/Membership';
import Services from './home/Services';
import Breadcrumbs from './components/navigation/Breadcrumbs';

const anchors = ["first", "second", "third","fourth"];

const currentPanel = 'Pause';

export default function Fullpage({onClick}) {
  var offset = '0';
 
 

    return (
      
  <ReactFullpage
    anchors={anchors}
    fixedElements='.breadcrumbs'
    onLeave={(origin, destination, direction) => {
    //   console.log("onLeave event", { origin, destination, direction });
    }}
  
    render={({ state, fullpageApi, origin, currentPanel}) => {


      currentPanel = 'Pause'

        if (state.lastEvent === "onLeave") {
          offset = state.destination.item.offsetTop
          var lines = document.querySelectorAll('.path'), i;
          var lines_bottom_right = document.querySelectorAll('.path-bottom-right'), i;
          var lines_top_left = document.querySelectorAll('.path-top-left'), i;

          for (i = 0; i < lines.length; ++i) {
            lines[i].style.animation = 'none';
            lines_bottom_right[i].style.animation = 'none';
            lines_top_left[i].style.animation = 'none';

          }
          setTimeout(() => {
            for (i = 0; i < lines.length; ++i) {
              lines[i].style.animation = 'dash 3s  forwards';
              lines_bottom_right[i].style.animation = ' dash2 3s  forwards';
              lines_top_left[i].style.animation = ' dash2 3s  forwards';
            }
          }, 200);


                if (state.destination.anchor) {
                currentPanel = state.destination.anchor;
                }

                if (state.destination.anchor == 'second' &&  state.direction == 'down') {
                    const wrapper = document.querySelector('.wrapper');
                    wrapper.appendChild(document.querySelector('.top_content'))
                    document.querySelector('.top_content').classList.add("active-bar");

                    document.querySelector('.menu').classList.add('menu_active')
                }

                if (state.destination.anchor == 'first') {
                    const wrapper = document.querySelector('.top_section');
                    wrapper.appendChild(document.querySelector('.top_content'))
                    document.querySelector('.top_content').classList.remove("active-bar");

                    document.querySelector('.menu').classList.remove('menu_active')

                }

            }
          
        

    

      return (
        <div>
        <Breadcrumbs items={anchors} anchor={currentPanel} />

        <ReactFullpage.Wrapper>
          <div className="section">
            <Top onClick={onClick} />
          </div>
          <div className="section ">
            <About paused={currentPanel != 'second'} />
          </div>
          <div className="section">
            <Services paused = {currentPanel != 'third'} offset={offset}/>
          </div>
          <div className="section">
            <Heart_section paused={currentPanel != 'fourth'} />
          </div>
    
        </ReactFullpage.Wrapper>
      </div>
      );


    }}
  />
    ) 
}