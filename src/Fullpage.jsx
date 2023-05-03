import Top from './home/Top'
import About from './home/About'
import MainMenu from './home/MainMenu';
import HeartSection from './home/HeartSection'
import Services from './home/Services';
import React, {useState} from 'react';
import Contact from './home/Contact'
import ReactFullpage from '@fullpage/react-fullpage';
import { useSwipeable } from "react-swipeable";




const anchors = ["first", "second", "third","fourth","fifth"];

let currentIndex = 0;
export default function Fullpage({onClick, setIsOpen}) {

  
  
  var offset = '0';
  const [activeId, setActiveId] = useState(0);
  
  function onChange(newState) {   setActiveId(newState);}

  const swipeFunction = (direction) => {
    
      switch(direction) {
        case 'up':
          setActiveId(activeId + 1);
          console.log(activeId);
          if(activeId == 4){ setActiveId(0)}
        break;

        case 'down':
          setActiveId(activeId - 1);
          console.log(activeId)
          if(activeId == -1){ setActiveId(0)}
        break;
      }
  
  }

var config = {
  delta: 10,                             // min distance(px) before a swipe starts. *See Notes*
  preventScrollOnSwipe: false,           // prevents scroll during swipe (*See Details*)
  trackTouch: true,                      // track touch input
  trackMouse: false,                     // track mouse input
  rotationAngle: 0,                      // set a rotation angle
  swipeDuration: Infinity,               // allowable duration of a swipe (ms). *See Notes*
  touchEventOptions: { passive: true },  // options for touch listeners (*See Details*)
}

  const handlers = useSwipeable({
    onSwipedDown: (eventData) => swipeFunction('down'),
    onSwipedUp: (eventData) => swipeFunction('up'),
    ...config,
  });
  
return (
      
  <ReactFullpage


    anchors={anchors}
    lockAnchors={true}
    fixedElements='.breadcrumbs, .menu'
    onLeave={(origin, destination, direction, currentPanel, fullpageApi) => {
    }}
   
  
    render={({ state, fullpageApi, origin, currentPanel}) => {



      if (state.lastEvent === "onLeave" && state.destination.anchor === "third" && activeId != 0 ) {
        
        fullpageApi.setAllowScrolling(false);

      }

      else if (fullpageApi) {
        fullpageApi.setAllowScrolling(true);
      }



      currentPanel = 'Pause'

      if (state.lastEvent === "onLeave") {
         currentIndex = state.destination.index

      

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

                if (state.destination.anchor === 'second' &&  state.direction === 'down') {
                    const wrapper = document.querySelector('.wrapper');
                    wrapper.appendChild(document.querySelector('.top_content'))
                    document.querySelector('.top_content').classList.add("active-bar");

                    document.querySelector('.menu').classList.add('menu_active')
                }

                if (state.destination.anchor === 'first') {
                    const wrapper = document.querySelector('.top_section');
                    wrapper.appendChild(document.querySelector('.top_content'))
                    document.querySelector('.top_content').classList.remove("active-bar");

                    document.querySelector('.menu').classList.remove('menu_active')

                }

            }
          
        

    

      return (
        <div style={{'height':'100%'}}>
        {/* <Breadcrumbs items={anchors} anchor={currentPanel} /> */}
        <MainMenu currentScroll={currentIndex} onClick={setIsOpen}/>

        <ReactFullpage.Wrapper>

          <div className="section"  >
            <Top onClick={onClick} currentScroll={currentIndex} />
          </div>
         
          <div className="section ">
             <About paused={currentPanel !== 'second'} /> 
          </div> 
    
          <div className="section" {...handlers} currentactive={activeId}  >
            <Services paused = {currentPanel !== 'third'} offset={offset} onClick={onClick} setActiveId={() => setActiveId()} 
            activeId={activeId} onNameChange={onChange} />
          </div>

          <div className="section">
            { <HeartSection paused={currentPanel !== 'fourth'} /> }
          </div>

          <div className="section">
            <Contact paused={currentPanel !== 'fifth'} />
          </div>

        </ReactFullpage.Wrapper>
      </div>
      );


    }}
  />
    ) 
}