
import React from 'react';

export default React.memo(function Item({theIndex,title,tags,img,categories,link,id,currentpanel,fadeIt}) {

 
    if(categories.includes('wordpress')) {
        var icon = 'wordpress';
    }
    else if(categories.includes('shopify')) {
        var icon = 'shopify';
    }
    else if(categories.includes('magento')) {
        var icon = 'magento';
    }
    else {
        var icon = 'other';
    }
  
    return (

     <div id={id}
     style={{
         animationDelay:`.${theIndex}s`,
         opacity:'0'
     }}
     onClick={ ()=>{currentpanel(id)}} 
     className={"item "+categories.join(' ',category=> (
            category
            )
            )
            }>
        
                <a href={link}></a>
            <div className="title">
           
                <div className="icon"><img src={`/images/icons/${icon}.png`}/></div>
                <h3>{title}</h3>
            </div>
        <div className="image" style={{
            backgroundImage: `url(${img})`,
        }}>
      </div>
      <div className="info">
        <ul className="tags">
            {tags.map(tag=> (
                <li>{tag}</li>
            )
            )}
        </ul>
     </div>
    </div>
    
    )
}
)