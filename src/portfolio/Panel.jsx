import React from 'react';


export default React.memo(function Panel({title,img}) {
  return (
        <div className="panel">
           <div className="topBanner" style={{backgroundImage:`url(${img})`}}>
               <h2>{title}</h2>
            </div>
        </div>
    )

}
)
