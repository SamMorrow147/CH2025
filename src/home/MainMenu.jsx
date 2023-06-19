import { useLocation, Link } from 'react-router-dom';

export default function MainMenu({currentScroll, onClick}) {

    function isEven(n) {
        return n % 2 === 0;
     }
     

     const location = useLocation();
     const showProjectNav = location.pathname.startsWith('/projects/');
     const showStaticBar = location.pathname === '/';


    return (
        <>
        <div className={`${isEven(currentScroll) ? 'menu' : 'menu even'} ${currentScroll !== 0 ? 'menu_active' : ''}`}>

            <div className="mobile_icon" onClick={onClick}>
          
            </div>

           {/* Conditionally render the project navigation */}
                {showProjectNav && (
                    <div className="project-nav">
                        {/* Project navigation content */}
                        <Link to="/#fifth">BACK HOME</Link>
                        <a href="">VIEW ALL PROJECTS</a>
                    </div>
                )}

        {showStaticBar && (
          <div className="static-bar">
            <img className="logo" width="220" height="220" src="/images/animated-logo.gif" />
            <img
              className="wordmark"
              height="200"
              width="600"
              src={
                isEven(currentScroll) && currentScroll !== 0
                  ? '../images/wordmark.png'
                  : '../images/wordmark_white.png'
              }
            />
          </div>
        )}

        </div>
        
        </>
    )
}