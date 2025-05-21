import { useLocation, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function MainMenu({currentScroll, onClick, fullpageApi}) {

    function isEven(n) {
        return n % 2 === 0;
     }
     
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const showProjectNav = location.pathname.startsWith('/projects/');

    // Navigation menu items
    const navItems = [
        { id: 'first', name: 'Home' },
        { id: 'second', name: 'Who We Are' },
        { id: 'third', name: 'Services' },
        { id: 'fourth', name: 'Why ClubHaus' },
        { id: 'fifth', name: 'Portfolio' },
        { id: 'sixth', name: 'Our Heart' },
        { id: 'seventh', name: 'Contact' }
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Add direct DOM manipulation to hide mobile icon after component mounts
    useEffect(() => {
        // Forcefully hide any mobile_icon elements using direct DOM manipulation
        const mobileIcons = document.querySelectorAll('.mobile_icon');
        mobileIcons.forEach(icon => {
            icon.style.display = 'none';
            icon.style.opacity = '0';
            icon.style.visibility = 'hidden';
            icon.style.pointerEvents = 'none';
        });
    }, []);

    const handleNavClick = (anchorId, index) => {
        if (fullpageApi) {
            // Use direct section index for navigation (1-based indexing)
            try {
                console.log(`Menu navigating to section ${index + 1}`);
                fullpageApi.silentMoveTo(index + 1);
            } catch (error) {
                console.error('Menu navigation error:', error);
                // Fallback to hash navigation
                window.location.hash = anchorId;
            }
        } else {
            // Fallback to hash navigation
            window.location.hash = anchorId;
        }
        setMenuOpen(false);
    };

    return (
        <>
        <div className={`${isEven(currentScroll) ? 'menu' : 'menu even'} ${currentScroll !== 0 ? 'menu_active' : ''}`}>

           {/* Conditionally render the project navigation */}
                {showProjectNav && (
                    <div className="project-nav">
                        {/* Project navigation content */}
                        <Link to="/#fifth"> <img src="/images/arrowhead-left.svg" className="card-icon"/> <span>HOME</span></Link>
                        <a href="/projects"><img src="/images/card-icon.svg" className="card-icon"/> <span>VIEW ALL</span></a>
                    </div>
                )}

            {!showProjectNav && (
                <div className="static-bar">
                    <a href="/">
                        <img className="logo" width="220" height="220" src="/images/animated-logo.gif" />
                        <img
                        className="wordmark"
                        height="200"
                        width="600"
                        src={
                            isEven(currentScroll) && currentScroll !== 0
                            ? '../images/wordmark.png'
                            : '../images/wordmark_white.png'
                        }
                        />
                    </a>
                </div>
            )}
  
            {/* Navigation overlay */}
            <div 
                className={`nav-overlay ${menuOpen ? 'open' : ''}`}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    zIndex: 90,
                    display: menuOpen ? 'flex' : 'none',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {navItems.map((item, index) => (
                    <div 
                        key={item.id}
                        onClick={() => handleNavClick(item.id, index)}
                        style={{
                            padding: '15px 30px',
                            margin: '5px 0',
                            color: 'white',
                            fontSize: '28px',
                            fontFamily: 'eurostile, sans-serif',
                            cursor: 'pointer',
                            letterSpacing: '2px',
                            transition: 'all 0.3s ease',
                            borderLeft: currentScroll === index ? '4px solid #329ec7' : '4px solid transparent',
                            transform: 'translateX(' + (index * 10) + 'px)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#329ec7';
                            e.currentTarget.style.transform = `translateX(${(index * 10) + 10}px)`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.transform = `translateX(${index * 10}px)`;
                        }}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}