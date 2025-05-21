import Table from '../animations/Table.js'
import Background from './Background'
import TextLoop from "react-text-loop";
import DownArrow from '../components/DownArrow.jsx';
import { useEffect, useState } from 'react';

export default function About(props) {
    // Track window width for responsive design
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const navigateToSection = (section) => {
        // Use the fullpage.js API to navigate
        if (window.fullpage_api) {
            if (section === 'sixth') {
                window.fullpage_api.moveTo(6);
            }
        }
    };
    
    return (    
        <div className="second_section white_background">
            
            {props.paused === false ? <Background/> : '' } 
            {props.paused === false ? 

            <div className="second_wrapper container">

                <div className="second_content">
                    <h2>WE ARE A<span> CREATIVE</span> <strong>POWERHOUSE</strong></h2>
                    
                    {isMobile ? (
                        // Mobile layout with reduced spacing
                        <div style={{position: 'relative'}}>
                            <p style={{marginBottom: '80px', paddingBottom: 0}}>
                                A FULL DECK OF MARKETING ACES WHO DESIGN, CREATE AND BUILD {props.paused ? <strong>COOL $#!%</strong> : (
                                <span className="text-loop-wrapper" style={{display: 'inline-block', transform: 'translateY(-4px)'}}>
                                    <TextLoop 
                                        delay={3000} 
                                        interval={1500} 
                                        children={[
                                            <strong>COOL $#!%</strong>, 
                                            <strong>STORIES</strong>, 
                                            <strong>BRANDS</strong>, 
                                            <strong>CAMPAIGNS</strong>, 
                                            <strong>ADS</strong>, 
                                            <strong>START-UPS</strong>, 
                                            <strong>PACKAGES</strong>, 
                                            <strong>BUSINESS</strong>, 
                                            <strong>LEGENDS</strong>, 
                                            <strong>ICONS</strong>, 
                                            <strong>EMPIRES</strong>, 
                                            <strong>MOVEMENTS</strong>, 
                                            <strong>BUZZ</strong>
                                        ]}
                                    />
                                </span>
                                )}
                            </p>
                            <div style={{
                                position: 'absolute',
                                top: '60px',
                                left: 0,
                                right: 0,
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '20px'
                            }}>
                                <button onClick={() => navigateToSection('sixth')} className="btn2">Purpose</button>
                                <a href="/projects" className="btn2">Projects</a>
                            </div>
                        </div>
                    ) : (
                        // Desktop layout with left-aligned buttons
                        <>
                            <p>
                                A FULL DECK OF MARKETING ACES WHO DESIGN, CREATE AND BUILD {props.paused ? <strong>COOL $#!%</strong> : (
                                <span className="text-loop-wrapper" style={{display: 'inline-block', transform: 'translateY(-4px)'}}>
                                    <TextLoop 
                                        delay={3000} 
                                        interval={1500} 
                                        children={[
                                            <strong>COOL $#!%</strong>, 
                                            <strong>STORIES</strong>, 
                                            <strong>BRANDS</strong>, 
                                            <strong>CAMPAIGNS</strong>, 
                                            <strong>ADS</strong>, 
                                            <strong>START-UPS</strong>, 
                                            <strong>PACKAGES</strong>, 
                                            <strong>BUSINESS</strong>, 
                                            <strong>LEGENDS</strong>, 
                                            <strong>ICONS</strong>, 
                                            <strong>EMPIRES</strong>, 
                                            <strong>MOVEMENTS</strong>, 
                                            <strong>BUZZ</strong>
                                        ]}
                                    />
                                </span>
                                )}
                            </p>
                            <div className="button-container" style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                gap: '20px',
                                marginTop: '30px',
                                paddingLeft: '0'
                            }}>
                                <button onClick={() => navigateToSection('sixth')} className="btn2">Purpose</button>
                                <a href="/projects" className="btn2">Projects</a>
                            </div>
                        </>
                    )}
                </div>
                <Table paused = {props.paused}/>
                
            </div> : ''}
            <DownArrow handleClick={props.arrowClick}/>


        </div>
        )
    }