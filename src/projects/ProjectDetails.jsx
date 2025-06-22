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
    const videoRef = useRef(null);

    // Mobile detection and video playback states
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isMobileSafari = isIOS && isSafari;
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [videoPlaying, setVideoPlaying] = useState(false);
    const [showVideoFallback, setShowVideoFallback] = useState(false);

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

    // Handle window resize for responsive design
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handle video load and check autoplay capability
    const handleVideoLoaded = () => {
        // On mobile devices, be more cautious about autoplay
        if (isMobile && videoRef.current) {
            // Small delay to let the browser attempt autoplay naturally
            setTimeout(() => {
                if (videoRef.current && videoRef.current.paused && !videoPlaying) {
                    // If video is still paused after attempting autoplay, show poster
                    setShowVideoFallback(true);
                }
            }, 500);
        }
    };

    // Handle manual video play (when user clicks poster)
    const handleManualPlay = () => {
        if (videoRef.current) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setVideoPlaying(true);
                        setShowVideoFallback(false);
                    })
                    .catch(err => {
                        console.error("Manual video play failed:", err);
                        // Keep poster visible if manual play also fails
                    });
            } else {
                setVideoPlaying(true);
                setShowVideoFallback(false);
            }
        }
    };

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
                <div className="back-to-portfolio-detail">
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
        <div className="back-to-portfolio-detail">
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
                {project?.video && (
                    <div className="video-container">
                        <video 
                            ref={videoRef}
                            preload="auto" 
                            key={project.video.fields.title} 
                            autoPlay={true} 
                            muted 
                            playsInline
                            onLoadedData={handleVideoLoaded}
                            onPlay={() => setVideoPlaying(true)}
                            onError={() => setShowVideoFallback(true)}
                            style={{
                                display: showVideoFallback ? 'none' : 'block'
                            }}
                        >
                            {project.video.fields.file.url && <source src={project.video.fields.file.url} type="video/mp4"/>}
                            Your browser does not support the video tag.
                        </video>
                        
                        {/* Poster fallback with play button */}
                        {showVideoFallback && (
                            <div 
                                className="video-poster" 
                                onClick={handleManualPlay}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundImage: `url(${project?.headerImage?.fields?.file?.url})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <div 
                                    className="play-button"
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <div 
                                        style={{
                                            width: 0,
                                            height: 0,
                                            borderLeft: '20px solid white',
                                            borderTop: '12px solid transparent',
                                            borderBottom: '12px solid transparent',
                                            marginLeft: '4px'
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                )}
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