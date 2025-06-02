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
            } else if (section === 'seventh') {
                window.fullpage_api.moveTo(7);
            } else if (section === 'fifth') {
                window.fullpage_api.moveTo(5);
            }
        }
    };
    
    return (    
        <div className="second_section white_background">
            
            {props.paused === false ? <Background/> : '' } 
            {props.paused === false ? 

            <div className="second_wrapper container">

                <div className="second_content">
                    <h2 style={{ fontSize: '36px' }}>WE ARE A<span> CREATIVE</span> <strong>POWERHOUSE</strong></h2>
                    
                    {isMobile ? (
                        // Mobile layout with reduced spacing
                        <div style={{position: 'relative'}}>
                            <p className="about-main-statement">
                                A full deck of marketing aces who design, create and build 
                                {props.paused ? <strong>cool $#!%</strong> : (
                                <span className="text-loop-wrapper" style={{display: 'inline-block', transform: 'translateY(0px)'}}>
                                    <TextLoop 
                                        delay={3000} 
                                        interval={1500} 
                                        children={[
                                            <strong>cool $#!%.</strong>, 
                                            <strong>stories.</strong>, 
                                            <strong>brands.</strong>, 
                                            <strong>campaigns.</strong>, 
                                            <strong>ads.</strong>, 
                                            <strong>start-ups.</strong>, 
                                            <strong>packages.</strong>, 
                                            <strong>business.</strong>, 
                                            <strong>legends.</strong>, 
                                            <strong>icons.</strong>, 
                                            <strong>empires.</strong>, 
                                            <strong>buzz.</strong>
                                        ]}
                                    />
                                </span>
                                )}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: '20px',
                                    marginTop: '15px'
                                }}>
                                    <button onClick={() => navigateToSection('sixth')} className="btn2">Purpose</button>
                                    <button onClick={() => navigateToSection('fifth')} className="btn2">Projects</button>
                                    <button onClick={() => navigateToSection('seventh')} className="btn2">People</button>
                                </div>
                            </p>
                        </div>
                    ) : (
                        // Desktop layout with left-aligned buttons
                        <>
                            <p className="about-main-statement">
                                A full deck of marketing aces who design, create and build 
                                {props.paused ? <strong>cool $#!%</strong> : (
                                <span className="text-loop-wrapper" style={{display: 'inline-block', transform: 'translateY(1px)'}}>
                                    <TextLoop 
                                        delay={3000} 
                                        interval={1500} 
                                        children={[
                                            <strong>cool $#!%.</strong>, 
                                            <strong>stories.</strong>, 
                                            <strong>brands.</strong>, 
                                            <strong>campaigns.</strong>, 
                                            <strong>ads.</strong>, 
                                            <strong>start-ups.</strong>, 
                                            <strong>packages.</strong>, 
                                            <strong>business.</strong>, 
                                            <strong>legends.</strong>, 
                                            <strong>icons.</strong>, 
                                            <strong>empires.</strong>, 
                                            <strong>buzz.</strong>
                                        ]}
                                    />
                                </span>
                                )}
                                <div style={{
                                    display: 'flex',
                                    gap: '20px',
                                    justifyContent: 'flex-start',
                                    marginTop: '15px'
                                }}>
                                    <button onClick={() => navigateToSection('sixth')} className="btn2">Purpose</button>
                                    <button onClick={() => navigateToSection('fifth')} className="btn2">Projects</button>
                                    <button onClick={() => navigateToSection('seventh')} className="btn2">People</button>
                                </div>
                            </p>
                        </>
                    )}
                </div>
                <Table paused = {props.paused}/>
                
            </div> : ''}
            <DownArrow handleClick={props.arrowClick}/>


        </div>
        )
    }