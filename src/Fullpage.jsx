import Top from './home/Top'
import About from './home/About'
import MainMenu from './home/MainMenu';
import HeartSection from './home/HeartSection'
import Services from './home/Services';
import React, {useState} from 'react';
import Contact from './home/Contact'
import ReactFullpage from '@fullpage/react-fullpage';
import { useSwipeable } from "react-swipeable";
import ProjectSlider from './projects/ProjectSlider'
import AboutTwo from './home/AboutTwo';

const anchors = ["first", "second", "third","fourth","fifth", "sixth","seventh"];

let currentIndex = 0;
export default function Fullpage({onClick, setIsOpen}) {

  
  
  var offset = '0';
  const [activeId, setActiveId] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentSlider, setCurrentSlider] = useState(0);

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

  var handleArrowClick = (fullpageApi) => {
    fullpageApi.moveSectionDown();
  };

  function isEven(n) {
    return n % 2 == 0;
 }

  return (
    <>
    <MainMenu currentScroll={currentSlider} onClick={setIsOpen}/>

    <ReactFullpage
      anchors={anchors}
      lockAnchors={true}
      fixedElements='.breadcrumbs'
      onLeave={(origin, destination, direction, currentPanel, fullpageApi,state) => {}}
      render={({ state, fullpageApi, origin, currentPanel}) => {

        console.log(state.destination ?? 0);


        if (state.lastEvent === "onLeave" && state.destination.anchor === "third" && activeId != 0 ) {
          fullpageApi.setAllowScrolling(false);
        } else if (fullpageApi) {
          fullpageApi.setAllowScrolling(true);
        }
        currentPanel = 'Pause';
  
        if (state.lastEvent === "onLeave") {
          currentIndex = state.destination.index;
          offset = state.destination.item.offsetTop;

          setCurrentSlider(state.destination.index ?? 0);

     
          if (state.destination.anchor) {
            currentPanel = state.destination.anchor;
          }
  
          if (state.destination.anchor === 'second' && state.direction === 'down') {
            const wrapper = document.querySelector('.wrapper');
            wrapper.appendChild(document.querySelector('.top_content'))
            document.querySelector('.top_content').classList.add("active-bar");
          
          }
  
          if (state.destination.anchor === 'first') {
            const wrapper = document.querySelector('.top_section');
            wrapper.appendChild(document.querySelector('.top_content'))
            document.querySelector('.top_content').classList.remove("active-bar");
        
          }
          console.log(fullpageApi)
        } 

  
        return (
          
          <div style={{'height':'100%'}}>
            {/* <Breadcrumbs items={anchors} anchor={currentPanel} /> */}
            <ReactFullpage.Wrapper>
              
              <div className="section">
                <Top onClick={onClick} currentScroll={currentIndex} arrowClick={() => fullpageApi.moveSectionDown()} />
              </div>

              <div className="section">
                <About paused={currentPanel !== 'second'} arrowClick={() => fullpageApi.moveSectionDown()} /> 
              </div> 

              <div className="section" {...handlers} currentactive={activeId}  >
                <Services paused={currentPanel !== 'third'} offset={offset} arrowClick={() => fullpageApi.moveSectionDown()} onClick={onClick} setActiveId={() => setActiveId()} activeId={activeId} onNameChange={onChange}  />
              </div>

              <div className="section">
                <AboutTwo paused={currentPanel !== 'fourth' } arrowClick={() => fullpageApi.moveSectionDown()}  /> 
              </div> 

              <div className="section">
                <ProjectSlider paused={currentPanel !== 'fifth' }  arrowClick={() => fullpageApi.moveSectionDown()} projectClick= {() => {fullpageApi.silentMoveTo('sixth'); console.log('clicker')}} />
              </div>

              <div className="section">
                <HeartSection paused={currentPanel !== 'sixth'} arrowClick={() => fullpageApi.moveSectionDown()} />
              </div>

              <div className="section">
                <Contact paused={currentPanel !== 'seventh'} arrowClick={() => fullpageApi.moveSectionDown()} />
              </div>

            </ReactFullpage.Wrapper>
          </div>
         
        );
      }}
    />
     </>
  );
}