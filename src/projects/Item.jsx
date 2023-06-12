
import React from 'react';
import { Link } from 'react-router-dom/dist';

export default React.memo(function Item(props) {

  
    return (

     <div id={props.id} style={{
         animationDelay:`${props.theIndex * .2}s`,
        
         zIndex:props.totalIndex - props.theIndex,
         display:'block'
     }}
     className="project_item"
     onClick={props.projectClick}
     >
        <Link to={`projects/${props.id}`}></Link>
        <div class="project-card">
            
            <div className="image" style={{backgroundImage: `url(${props.img})`}}>
            </div>

            <div className="card-inner">
                <img src={props.logo} />
            </div>

        </div>       

        <div className="title">
            <h3>{props.title}</h3>
            <span>{props.sub}</span>
        </div> 
    
      
        
    </div>
    
    )
}
)