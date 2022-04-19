import {ProjectData} from "../projects/project_data";
import {useEffect, useState} from 'react';
import Item from '../projects/Item'
import slugify from "react-slugify";

export default function Projects(props) {

    const [data, setData] = useState([]);


    useEffect(()=>{
        
        setData(ProjectData)

});

    return (
   
        <div className="project_section">


        <div className="project_wrapper container">
            <div className="project_content">
            <div className="project_title"><h3>RECENT PROJECTS</h3></div>

                    {              
                    data.map( (item,index)  => (
                            <Item
                            title={item.title}
                            tags={item.tags}
                            img={item.img}
                            categories={item.category}
                            link={item.link}
                            slug={slugify(item.title)}
                            id={item.id}
                            theIndex={index}
                            paused={props.paused}
                            key={index}
                            />
                        ))
                    }
            </div>

            <div className="project_text">
            </div>

        </div>

    </div>
        
    )
}