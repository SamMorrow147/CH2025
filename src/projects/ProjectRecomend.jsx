import { useState, useEffect } from 'react';
import Item from './Item';
import slugify from "react-slugify";
import { createClient } from 'contentful';
import MainMenu from '../home/MainMenu';



function getRandomRotation() {
    return Math.random() * 15 - 5; // Generates a random number between -5 and 5
  }

  

const client = createClient({
    space: 'yk9odzegnojt',
    accessToken: 'Qo-cqV0zm7ZQzXFN8BuuWmwLo4yvW23cctCiBDLnYgU'
});

export default function ProjectRecomend(props) {


    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        client.getEntries({
            content_type: 'projects'
        })
        .then(response => setProjectData(response.items))
        .catch(console.error);
    }, []);



      
    const maxDelay = 1; // Maximum delay in seconds
    const baseDelay = maxDelay / projectData.length;
    
console.log(projectData);

    return (
<>
        <MainMenu/>
        <div className="project_section project_grid project_related">
        <div className="project_title"><h3> SIMILAR PROJECTS</h3></div>

            <div className="project_wrapper container">
                <div className="project_content ">
                     



                        {              
                        projectData?.slice(0,5).map(({ sys, fields, metadata }, index) => {
                            return (
                             props.skip !== sys.id &&   
                             <div 
                                    className="grid_item"
                                    key={`${index}_${fields.title}`}
                                    style={{
                                    zIndex: projectData.length - index < 0 ? projectData.length - index : 0,
                                    animationDelay: `${.3}s`,
                                    rotate: `${getRandomRotation()}deg`,
                                    translate: `-${390 * (index % 4)}px -${Math.floor(index / 4) * 570 }px`,
                                    position:'relative'
                        
                                }}>
                                    
                                    <Item
                                        title={fields.title}
                                        tags={fields.tags}
                                        logo={fields.logo.fields.file.url}
                                        sub={fields.subtitle}
                                        img={fields.image.fields.file.url}
                                        categories={fields.categories}
                                        link={fields.link}
                                        slug={slugify(fields.title)}
                                        id={sys.id}
                                        theIndex={index}
                                        paused={props.paused}
                                        key={index}
                                        projectClick={props.projectClick}
                                        totalIndex={projectData.length}
                                        tag={metadata.tags}
                                    />

                                </div>
                        
                            );
                        })
                        }
                 
                </div>
                <div className="project_text"></div>
            </div> 
        </div>
        </>
    )
}

