export default function Background() {
    return (
        <div className="animation-back">
            <div className="glimmer"></div>
            <div className="lines">

                <svg   xmlns="http://www.w3.org/2000/svg"  className="center" height="100%" width="100%" viewBox="0 0 100 100"  preserveAspectRatio="none">
                     <polygon  pathLength="100" className="path" fill="transparent" stroke="black"    points="0 0,0 100,100 100,100 0"  />
                </svg>

                <svg   xmlns="http://www.w3.org/2000/svg"  className="top-left" height="50%" width="50%" viewBox="0 0 100 100"  preserveAspectRatio="none">
                     <polygon  pathLength="100" className="path-top-left" fill="transparent" stroke="black"    points="100 0, 0 0,0 100,100 100"  />
                </svg>
                
                
                <svg   xmlns="http://www.w3.org/2000/svg"  className="bottom-right" height="50%" width="50%" viewBox="0 0 100 100"  preserveAspectRatio="none">
                     <polygon  pathLength="100" className="path-bottom-right" fill="transparent" stroke="black"    points="0 100,100 100, 100 0, 0 0"  />
                </svg>
               
                <img src="../images/logo.webp" className="logo-top"/>
                <img src="../images/logo.webp" className="logo-bottom"/>

            </div>

        </div>


    )
}
