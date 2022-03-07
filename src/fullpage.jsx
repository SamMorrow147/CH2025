
import Top from './home/Top'
import ReactFullpage from '@fullpage/react-fullpage';
import About from './home/About'
import Menu from './Menu';
import HeartSection from './home/HeartSection'
import Services from './home/Services';


const anchors = ["first", "second", "third","fourth"];

let currentIndex = 0;
export default function Fullpage({onClick}) {
  var offset = '0';
 
 

    return (
      
  <ReactFullpage
    anchors={anchors}
    lockAnchors={true}
    fixedElements='.breadcrumbs, .menu'
    onLeave={(origin, destination, direction) => {
    //   console.log("onLeave event", { origin, destination, direction });
    }}
  
    render={({ state, fullpageApi, origin, currentPanel}) => {

      currentPanel = 'Pause'

      if (state.lastEvent === "onLeave") {
         currentIndex = state.destination.index
        
        console.log(currentIndex)
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
        <div>
        {/* <Breadcrumbs items={anchors} anchor={currentPanel} /> */}
        <Menu currentScroll={currentIndex}/>
        <ReactFullpage.Wrapper>
          <div className="section">
            <Top onClick={onClick} currentScroll={currentIndex} />
          </div>
          <div className="section ">
            <About paused={currentPanel !== 'second'} />
          </div>
          <div className="section">
            <Services paused = {currentPanel !== 'third'} offset={offset}/>
          </div>
          <div className="section">
            <HeartSection paused={currentPanel !== 'fourth'} />
          </div>
    
        </ReactFullpage.Wrapper>
      </div>
      );


    }}
  />
    ) 
}