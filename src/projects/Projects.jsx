import { useState, useEffect } from 'react';
import Item from './Item';
import slugify from "react-slugify";
import { createClient } from 'contentful';
import MainMenu from '../home/MainMenu';
import { useNavigate } from 'react-router-dom/dist';


function getRandomRotation() {
    return Math.random() * 15 - 5; // Generates a random number between -5 and 5
  }

  

const client = createClient({
    space: 'yk9odzegnojt',
    accessToken: 'Qo-cqV0zm7ZQzXFN8BuuWmwLo4yvW23cctCiBDLnYgU'
});

export default function Projects(props) {
    const [projectData, setProjectData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        client.getEntries({
            content_type: 'projects'
        })
        .then(response => setProjectData(response.items))
        .catch(console.error);
    }, []);

    const maxDelay = 1; // Maximum delay in seconds
    const baseDelay = maxDelay / projectData.length;

    // Handle back navigation to portfolio section
    const handleBackToPortfolio = () => {
        // Navigate to home page first
        navigate('/');
        // After navigation, wait for fullpage.js to initialize
        setTimeout(() => {
            if (window.fullpage_api) {
                // Temporarily set faster scrolling speed
                window.fullpage_api.setScrollingSpeed(50);
                // Move to the portfolio section (fifth section)
                window.fullpage_api.moveTo(5);
                // Reset scrolling speed after navigation
                setTimeout(() => {
                    window.fullpage_api.setScrollingSpeed(1000);
                }, 100);
            }
        }, 500);
    };

    return (
<>
        <MainMenu/>
        
        {/* Back to Portfolio Button */}
        <div className="back-to-portfolio" style={{ paddingLeft: '30px' }}>
            <button onClick={handleBackToPortfolio} className="back-btn">
                ← Back to Portfolio
            </button>
        </div>
        
        <div className="project_section project_grid project_all">
        <div className="project_title" style={{ marginBottom: 0 }}><h3> PROJECTS</h3></div>
            <div className="project_wrapper container" style={{ paddingTop: 0 }}>
                <div className="project_content ">
                     
                        {              
                        projectData?.map(({ sys, fields, metadata }, index) => {
                            const delay = (projectData.length - index) * baseDelay;
                            return (
                                <div className="grid_item"
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

