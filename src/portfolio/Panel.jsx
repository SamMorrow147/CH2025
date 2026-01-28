import React from 'react';



export default React.memo(function Panel(props) {

  return (
        <div className="panel">
           <div className="topBanner" style={{backgroundImage:`url(${props.img})`}}>
            </div>
            <div className="title">
                <h2>{props.title}</h2>
            </div>
        
            <div className="phone">

                <div className="phoneBar">
                    <div className="time">12:00 PM</div>
                    <div className="phoneIcons"></div>
                    <div className="searchBar">
                        <div className="link">{props.link}</div>
                    </div>
                </div>

                <div className="phoneContent" style={{backgroundImage:`url(${props.mobileImage})`}}>
                </div>


            </div>

        
        </div>
    )

}
)
