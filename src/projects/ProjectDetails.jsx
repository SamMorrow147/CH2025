import { createClient } from 'contentful'
import React, { useState, useEffect, useRef} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom/dist';
import ReactFullpage from '@fullpage/react-fullpage';
import MainMenu from '../home/MainMenu';
import "./project.scss"
import Item from './Item';
import ProjectRecomend from './ProjectRecomend';

const client = createClient({
    space: 'yk9odzegnojt',
    accessToken: 'Qo-cqV0zm7ZQzXFN8BuuWmwLo4yvW23cctCiBDLnYgU'
});

const ProjectDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [singleprojectData, setSingleProjectData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const contentRef = useRef(null);

    useEffect(() => {
        setIsLoading(true);
        client.getEntries({
            content_type: 'projects',
            'sys.id': id
        }).then(response => {
            if (!response.items.length) {
                navigate('/projects');
                return;
            }
            
            setSingleProjectData({
                items: response.items
            });
            setIsLoading(false);
        }).catch(error => {
            console.error('Error fetching project:', error);
            navigate('/projects');
        });
    }, [id, navigate]);

    const project = singleprojectData?.items?.[0]?.fields;
    const projectId = singleprojectData?.items?.[0]?.sys?.id;
    const sections = project?.sections || [];

    const modifiedURL = project?.url ? (/^https?:\/\//i.test(project.url) ? project.url : `https://${project.url}`) : null;

    // Handle back navigation to portfolio section
    const handleBackToPortfolio = () => {
        navigate('/portfolio');
    };

    useEffect(() => {
        if (contentRef.current && !isLoading) {
            setTimeout(() => {
                contentRef.current?.scrollIntoView({ behavior: 'instant', block: 'start' });
            }, 100);
        }
    }, [singleprojectData?.items, isLoading]);

    if (isLoading) {
        return (
            <>
                <MainMenu/>
                <div className="back-to-portfolio">
                    <button onClick={handleBackToPortfolio} className="back-btn">
                        ← Back to Portfolio
                    </button>
                </div>
                <div className="loading">Loading...</div>
            </>
        );
    }

    if (!project) {
        return null;
    }

    return (
        <>
        <MainMenu/>
        
        {/* Back to Portfolio Button */}
        <div className="back-to-portfolio">
            <button onClick={handleBackToPortfolio} className="back-btn">
                ← Back to Portfolio
            </button>
        </div>
        
        {project?.url &&
            <div className="project-url">
                <a href={modifiedURL} target="_BLANK">
                    VISIT <img src={`${project.logo?.fields?.file?.url}`} alt="Project Logo"/> WEBSITE!
                </a>
            </div>
        }

        <div className="project-details mt-5" ref={contentRef}>
            <div className="proj-header" style={{backgroundImage:`url(${project?.headerImage?.fields?.file?.url})`}}>
                {project?.video &&
                    <video preload="auto" key={project.video.fields.title} autoPlay={true} muted>
                        {project.video.fields.file.url && <source src={project.video.fields.file.url} type="video/mp4"/>}
                        Your browser does not support the video tag.
                    </video>
                }
                <h1>{project?.title}</h1>
            </div>

            <div className="container-lg project-content">
                <div className="row align-items-center">
                </div>
                {project?.text}

                {
                    sections &&
                    sections.map((item) => (
                        <div key={item.sys.id + item.fields?.title} className="row section">
                            {/* the media div */}
                            <div
                                className={`col ${
                                    item.fields && !item.fields.media && item.fields.title && item.fields.text
                                        ? 'col-12' // If there is no media and only text, make it full width
                                        : item.fields && item.fields.media && item.fields.media.length === 1 && !item.fields.title && !item.fields.text
                                        ? 'col-12 singleImage'
                                        : item.fields && item.fields.media && item.fields.media.length > 1
                                        ? 'col-12 multiple-images'
                                        : 'col-12 col-md-5'
                                }`}
                            >
                                {item.fields && item.fields.media &&
                                    item.fields.media.map((mediaItem) => {
                                        const { contentType, url } = mediaItem.fields.file;

                                        if (contentType.startsWith('image/')) {
                                            return <img key={mediaItem.id} src={url} />;
                                        } else if (contentType.startsWith('video/')) {
                                            return (
                                                <video key={mediaItem.id} src={url} autoplay="false" >
                                                    Your browser does not support the video tag.
                                                </video>
                                            );
                                        }

                                        return null; // Skip non-image and non-video media items
                                    })}
                            </div>

                            {/* the Text div */}
                            <div
                                className={`col ${
                                    item.fields && !item.fields.media && item.fields.text
                                        ? 'col-12 max-it' // If there is no media and there is text, make it full width
                                        : item.fields && item.fields.media && item.fields.media.length > 1
                                        ? 'col-12'
                                        : 'col-12 col-md-7'
                                }`}
                            >
                                <h3>{item.fields && item.fields.title}</h3>
                                <p>{item.fields && item.fields.text}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
        
        {projectId && <ProjectRecomend skip={projectId}/>}
        </>
    )
}

export default ProjectDetails