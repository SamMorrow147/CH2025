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
        <Link to={`/projects/${props.id}`}></Link>
        <div class="project-card">

            <div class="card-stack">
                <div></div>
                <div></div>
            </div>
            
            <div className="image"  style={{backgroundImage: `url(${props.img})`}}>
            </div>

            <div className="card-inner">
                <img src={props.logo} alt={props.title || "Project logo"} />
            </div>

        </div>       

        <div className="title">
            <h3>{props.title}</h3>
            {props.tag && props.tag.length > 0 ? (
                <span>
                {props.tag.map((item, index) => (
                    <React.Fragment key={index}>
                    {item.sys.id}
                    {index !== props.tag.length - 1 && ', '}
                    </React.Fragment>
                ))}
                </span>
            ) : (
                <span>{props.subtitle}</span>
            )}
            </div>

    </div>
    
      
 
    )
}
)