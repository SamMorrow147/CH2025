
import React from 'react';

export default React.memo(function Item(props,{theIndex,title,tags,img,categories,link,id,currentpanel,fadeIt}) {

 
    let icon = 'other';
    if(categories.includes('wordpress')) {
        icon = 'wordpress';
    }
    else if(categories.includes('shopify')) {
        icon = 'shopify';
    }
    else if(categories.includes('magento')) {
        icon = 'magento';
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
        
                <a href={link} aria-label={title}> </a>
            <div className="title">
           
                <div className="icon"><img src={`/images/icons/${icon}.png`} alt={`${icon} icon`}/></div>
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