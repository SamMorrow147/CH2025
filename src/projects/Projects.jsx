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
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 520);

    useEffect(() => {
        // Handle window resize for mobile detection
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 520);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Check on mount

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Only fetch data for desktop version
        if (!isMobile) {
            client.getEntries({
                content_type: 'projects'
            })
            .then(response => setProjectData(response.items))
            .catch(console.error);

            // Handle browser back button
            const handlePopState = () => {
                navigate('/portfolio');
            };

            window.addEventListener('popstate', handlePopState);

            return () => {
                window.removeEventListener('popstate', handlePopState);
            };
        }
    }, [navigate, isMobile]);

    // Listen for navigation messages from iframe (must be before conditional return)
    useEffect(() => {
        if (isMobile) {
            const handleMessage = (event) => {
                if (event.data?.type === 'navigate' && event.data?.path) {
                    // Store the card index if provided, so we can restore it when returning
                    if (event.data?.cardIndex !== undefined) {
                        localStorage.setItem('mobileProjectsCardIndex', event.data.cardIndex);
                    }
                    
                    const path = event.data.path;
                    
                    // Navigate directly to the path - Fullpage component will handle section navigation
                    // via its useEffect that listens to location.pathname changes
                    navigate(path);
                    
                    // For non-project paths, also ensure fullpage moves to the correct section
                    // as a backup in case the useEffect doesn't fire immediately
                    if (path !== '/projects' && !path.startsWith('/projects/')) {
                        const pathToSection = {
                            '/': 1,
                            '/who-we-are': 2,
                            '/services': 3,
                            '/why-clubhaus': 4,
                            '/portfolio': 5,
                            '/our-heart': 6,
                            '/team': 7,
                            '/contact': 8
                        };
                        
                        const targetSection = pathToSection[path];
                        if (targetSection) {
                            // Wait for navigation and fullpage to initialize, then move to section
                            let attempts = 0;
                            const maxAttempts = 25; // Try for up to 2.5 seconds
                            
                            const moveToSection = () => {
                                attempts++;
                                if (window.fullpage_api && window.fullpage_api.moveTo) {
                                    try {
                                        window.fullpage_api.moveTo(targetSection);
                                        window.fullpage_api.reBuild();
                                    } catch (e) {
                                        console.error('Error moving to section:', e);
                                    }
                                } else if (attempts < maxAttempts) {
                                    // If fullpage_api not ready yet, try again
                                    setTimeout(moveToSection, 100);
                                }
                            };
                            
                            // Start trying after a short delay to let navigation complete
                            setTimeout(moveToSection, 100);
                        }
                    }
                }
            };
            window.addEventListener('message', handleMessage);
            return () => window.removeEventListener('message', handleMessage);
        }
    }, [navigate, isMobile]);

    // Handle back navigation to portfolio section
    const handleBackToPortfolio = () => {
        navigate('/portfolio');
    };

    // Render mobile version if screen width <= 520px
    // Use iframe to load the static Next.js app
    if (isMobile) {
        return (
            <iframe 
                src="/mobile-projects/"
                style={{ 
                    width: '100%', 
                    height: '100dvh', // Use dynamic viewport height for Safari
                    border: 'none',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 9999,
                    backgroundColor: 'transparent',
                    overflow: 'hidden'
                }}
                title="Mobile Projects"
                allow="fullscreen"
                scrolling="no"
            />
        );
    }

    // Desktop version
    return (
        <>
            <MainMenu/>
            
            {/* Back to Portfolio Button */}
            <div className="back-to-portfolio">
                <button onClick={handleBackToPortfolio} className="back-btn">
                    ← Back to Portfolio
                </button>
            </div>
            
            <div className="project_section project_grid project_all">
                <div className="project_title"><h3> PROJECTS</h3></div>
                <div className="project_wrapper container">
                    <div className="project_content ">
                         
                            {              
                            projectData?.map(({ sys, fields, metadata }, index) => {
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

