import Top from './home/Top'
import About from './home/About'
import MainMenu from './home/MainMenu';
import HeartSection from './home/HeartSection'
import Services from './home/Services';
import React, {useState, useEffect, useRef} from 'react';
import Contact from './home/Contact'
import ReactFullpage from '@fullpage/react-fullpage';
import { useSwipeable } from "react-swipeable";
import ProjectSlider from './projects/ProjectSlider'
import AboutTwo from './home/AboutTwo';

const anchors = ["first", "second", "third","fourth","fifth", "sixth","seventh"];
const sectionNames = ['Home', 'Who We Are', 'Services', 'Why ClubHaus', 'Our Work', 'Modus Operandi', 'Reach Out'];

// Section theme colors mapping
const sectionThemeColors = {
  first: '#293a8d', // Home - default blue
  second: '#329ec7', // Who We Are - light blue
  third: '#293a8d', // Services - dark blue
  fourth: '#000000', // Why ClubHaus - dark section with white text
  fifth: '#293a8d', // Our Work - dark blue
  sixth: '#ff0000', // Modus Operandi - dark section with red heart icon
  seventh: '#000000', // Reach Out - black
};

// Function to get the appropriate theme color based on section
const getThemeColorForSection = (sectionIndex) => {
  if (sectionIndex === undefined || sectionIndex < 0 || sectionIndex >= anchors.length) {
    return '#293a8d'; // Default color
  }
  
  const sectionAnchor = anchors[sectionIndex];
  
  // Special handling for sections with unique styling
  switch(sectionAnchor) {
    case 'first': // Home
      return '#293a8d'; // Dark blue for home
    case 'second': // Who We Are
      return '#329ec7'; // Light blue
    case 'third': // Services
      return '#293a8d'; // Dark blue
    case 'fourth': // Why ClubHaus - dark section
      return '#000000'; // Black background
    case 'fifth': // Our Work
      return '#293a8d'; // Dark blue
    case 'sixth': // Modus Operandi - dark section
      return '#ff0000'; // Red for heart icon
    case 'seventh': // Reach Out
      return '#000000'; // Black
    default:
      return '#293a8d'; // Default dark blue
  }
};

// Removed the simple navigation dots style definitions

let currentIndex = 0;
export default function Fullpage({onClick, setIsOpen}) {

  var offset = '0';
  const [activeId, setActiveId] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentSlider, setCurrentSlider] = useState(0);
  const [currentSectionName, setCurrentSectionName] = useState(sectionNames[0]);
  const fullpageApiRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Force scroll to top on mount
  useEffect(() => {
    // Immediately scroll to top
    window.scrollTo(0, 0);
    
    // Clear any hash to prevent auto-scrolling
    if (window.location.hash) {
      window.history.replaceState(null, null, ' ');
    }
    
    // Wait for component to fully mount then scroll to top again
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      if (fullpageApiRef.current) {
        fullpageApiRef.current.moveTo(1);
      }
    }, 150);
    
    return () => clearTimeout(timer);
  }, []);

  function onChange(newState) {   setActiveId(newState);}

  const swipeFunction = (direction) => {
    
      switch(direction) {
        case 'up':
          setActiveId(activeId + 1);
          console.log(activeId);
          if(activeId == 4){ setActiveId(0)}
        break;

        case 'down':
          setActiveId(activeId - 1);
          console.log(activeId)
          if(activeId == -1){ setActiveId(0)}
        break;
      }
  
  }

var config = {
  delta: 10,                             // min distance(px) before a swipe starts. *See Notes*
  preventScrollOnSwipe: false,           // prevents scroll during swipe (*See Details*)
  trackTouch: true,                      // track touch input
  trackMouse: false,                     // track mouse input
  rotationAngle: 0,                      // set a rotation angle
  swipeDuration: Infinity,               // allowable duration of a swipe (ms). *See Notes*
  touchEventOptions: { passive: true },  // options for touch listeners (*See Details*)
}

  const handlers = useSwipeable({
    onSwipedDown: (eventData) => swipeFunction('down'),
    onSwipedUp: (eventData) => swipeFunction('up'),
    ...config,
  });

  var handleArrowClick = (fullpageApi) => {
    fullpageApi.moveSectionDown();
  };

  function isEven(n) {
    return n % 2 == 0;
 }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    // When opening the mobile menu, remove any animation classes
    if (!mobileMenuOpen) {
      const topContent = document.querySelector('.top_content');
      if (topContent) {
        topContent.classList.remove('active-bar');
      }
    }
    
    // Toggle mobile menu state
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle navigation click from mobile menu
  const handleMobileNavClick = (index) => {
    if (fullpageApiRef.current) {
      fullpageApiRef.current.moveTo(index + 1);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
    <MainMenu currentScroll={currentSlider} onClick={setIsOpen} fullpageApi={fullpageApiRef.current}/>
    
    {/* Section Name Display */}
    <div className="section-name-display">
      {currentSlider !== 0 ? currentSectionName : ''}
    </div>
    
    {/* Mobile Hamburger Menu */}
    <div className="mobile-hamburger" onClick={toggleMobileMenu}>
      <div className={`hamburger-icon ${mobileMenuOpen ? 'open' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    
    {/* Mobile Navigation Menu */}
    <div className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
      <div className="mobile-nav-items">
        {sectionNames.map((item, index) => (
          <div 
            key={index} 
            className={`mobile-nav-item ${currentSlider === index ? 'active' : ''}`}
            onClick={() => handleMobileNavClick(index)}
          >
            <span className="mobile-nav-text">{item}</span>
          </div>
        ))}
        
        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/mrwcreations" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="/images/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://www.facebook.com/clubhausagency" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="/images/facebook.svg" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/clubhaus_agency" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="/images/instagram.svg" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>

    <ReactFullpage
      anchors={anchors}
      lockAnchors={true}
      fixedElements='.breadcrumbs'
      dragAndMove={true}
      touchSensitivity={10}
      navigation={true}
      navigationPosition={'top'}
      showActiveTooltip={false}
      navigationTooltips={sectionNames}
      
      // Add custom style for navigation dots on dark sections
      afterRender={() => {
        // Store API reference
        if (window.fullpage_api) {
          fullpageApiRef.current = window.fullpage_api;
          // Force navigation to first section
          setTimeout(() => {
            window.scrollTo(0, 0);
            if (window.fullpage_api) {
              window.fullpage_api.moveTo(1);
            }
          }, 150);
        }
        
        // Add custom style for navigation dots on dark sections
        const style = document.createElement('style');
        style.innerHTML = `
          /* Style for top navigation */
          #fp-nav.fp-top {
            top: 15px !important;
            left: auto !important;
            right: 20px !important;
            transform: none;
            width: auto !important;
          }
          
          /* Right-align the navigation horizontally */
          #fp-nav.fp-top ul {
            display: flex;
            justify-content: flex-end;
          }
          
          /* Space the navigation dots properly */
          #fp-nav ul li {
            margin: 0 12px;
            height: 30px;
            width: 30px;
            position: relative;
          }
          
          /* Enlarge the clickable area */
          #fp-nav ul li a {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }
          
          /* Hide the original dots */
          #fp-nav ul li a span {
            display: none !important;
          }
          
          /* Add custom dots - all light blue */
          #fp-nav ul li a:before {
            content: "";
            width: 15px;
            height: 15px;
            background-image: url('/Chip.svg');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            background-color: transparent;
            transition: all 0.3s ease;
            display: block;
            position: absolute;
            filter: invert(48%) sepia(85%) saturate(442%) hue-rotate(163deg) brightness(92%) contrast(92%);
          }
          
          /* Define coin spin animation */
          @keyframes coinSpin {
            0% {
              transform: scale(1.3) rotateY(0deg);
            }
            100% {
              transform: scale(1.3) rotateY(180deg);
            }
          }
          
          /* Hover effect with coin spin animation */
          #fp-nav ul li a:not(.active):hover:before {
            animation: coinSpin 0.6s ease-in-out;
            transform: scale(1.3);
            transform-style: preserve-3d;
            backface-visibility: visible;
          }
          
          /* Remove all the icon-specific hover styling */
          /* Who We Are dot */
          #fp-nav ul li:nth-child(2) a:not(.active):hover:before,
          /* Services dot */
          #fp-nav ul li:nth-child(3) a:not(.active):hover:before,
          /* Why ClubHaus dot */
          #fp-nav ul li:nth-child(4) a:not(.active):hover:before,
          /* Our Work dot */
          #fp-nav ul li:nth-child(5) a:not(.active):hover:before,
          /* Modus Operandi dot */
          #fp-nav ul li:nth-child(6) a:not(.active):hover:before,
          /* Contact dot */
          #fp-nav ul li:nth-child(7) a:not(.active):hover:before {
            background-image: url('/Chip.svg');
          }
          
          /* Turn all dots white on Why ClubHaus page and Modus Operandi page */
          .fp-viewing-fourth #fp-nav ul li a:before,
          .fp-viewing-sixth #fp-nav ul li a:before {
            filter: brightness(100) saturate(0%) invert(100%);
            opacity: 0.9;
          }
          
          /* Make heart red on Modus Operandi section */
          .fp-viewing-sixth #fp-nav ul li a.active:before {
            background-image: url('/images/SVG/Heart@8x.svg');
            background-color: transparent !important;
            filter: invert(9%) sepia(98%) saturate(7106%) hue-rotate(1deg) brightness(104%) contrast(113%) !important;
            opacity: 1;
          }
          
          /* SVG color filter for the chip */
          #fp-nav ul li a.active:before,
          .mobile-nav-item.active:before {
            filter: none;
            /* Remove animations and transitions for immediate display */
            transform: scale(1.5) !important;
            animation: none !important;
            transition: none !important;
          }
          
          /* Flip animation - keeping for reference but not using it */
          @keyframes flipAnimation {
            0% {
              transform: scale(1.5);
              opacity: 1;
            }
            100% {
              transform: scale(1.5);
              opacity: 1;
            }
          }
          
          /* Add additional shine effect during flip - removed animation */
          #fp-nav ul li a.active:before {
            position: relative;
            backface-visibility: hidden;
          }
          
          #fp-nav ul li a.active:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: none;
            opacity: 0;
            transform: none;
            animation: none;
            pointer-events: none;
          }
          
          /* Remove shine effect animation */
          @keyframes shineEffect {
            0%, 100% { opacity: 0; }
          }
          
          /* Simplify perspective and container for immediate display */
          #fp-nav ul li {
            perspective: 800px;
            transform-style: preserve-3d;
            transition: none;
          }
          
          /* Remove hover animation - replaced with SVG hover effect */
          #fp-nav ul li a:not(.active):before {
            transition: all 0.2s ease;
          }
          
          /* Remove this to avoid conflict with our new hover style */
          /* #fp-nav ul li a:not(.active):hover:before {
            transform: none;
          } */
          
          /* Blue color for Clubs and Services */
          .fp-viewing-second #fp-nav ul li a.active:before,
          .fp-viewing-third #fp-nav ul li a.active:before {
            filter: invert(48%) sepia(85%) saturate(442%) hue-rotate(163deg) brightness(92%) contrast(92%);
          }
          
          /* Larger active dots - replaced with suit SVGs */
          #fp-nav ul li a.active:before {
            content: "";
            width: 24px;
            height: 24px;
            background-image: url('/Chip.svg');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            background-color: transparent;
            transform: scale(1.5);
            border-radius: 0;
            transition: all 0.3s ease;
          }
          
          /* Use Clubs for Who We Are section */
          .fp-viewing-second #fp-nav ul li a.active:before {
            background-image: url('/images/SVG/Clubs@8x.svg');
          }
          
          /* Use blue Chip for Services section */
          .fp-viewing-third #fp-nav ul li a.active:before {
            background-image: url('/Chip.svg');
          }
          
          /* Use RED Heart SVG for Modus Operandi section */
          .fp-viewing-sixth #fp-nav ul li a.active:before {
            background-image: url('/images/SVG/Heart@8x.svg');
            background-color: transparent !important;
            filter: invert(9%) sepia(98%) saturate(7106%) hue-rotate(1deg) brightness(104%) contrast(113%) !important;
            opacity: 1;
          }
          
          /* Use Spades for Contact section */
          .fp-viewing-seventh #fp-nav ul li a.active:before {
            background-image: url('/images/SVG/Spade@8x.svg');
            filter: brightness(0) saturate(100%);
            background-color: transparent !important;
          }
          
          /* Use Diamonds for remaining sections */
          .fp-viewing-fifth #fp-nav ul li a.active:before {
            background-image: url('/images/SVG/Diamond@8x.svg');
          }
          
          /* Hide tooltips completely */
          #fp-nav ul li .fp-tooltip {
            display: none !important;
          }
          
          /* Section name display */
          .section-name-display {
            position: fixed;
            top: 18px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 18px;
            font-weight: bold;
            color: white;
            z-index: 100;
            font-family: eurostile, sans-serif;
            letter-spacing: 1px;
            text-align: center;
            white-space: nowrap; /* Prevent text wrapping */
            min-width: 120px; /* Ensure minimum width for text */
          }
          
          /* Move section name more to the right on mobile to avoid logo collision */
          @media (max-width: 768px) {
            .section-name-display {
              left: 63%;
              transform: translateX(-50%);
              width: auto; /* Allow container to expand as needed */
              padding-left: 10px; /* Add more spacing */
            }
          }
          
          /* Color changes for light sections */
          .fp-viewing-second .section-name-display {
            color: #329ec7;
          }
          
          /* Dark blue for Portfolio, Services sections */
          .fp-viewing-third .section-name-display,
          .fp-viewing-fifth .section-name-display {
            color: #293a8d;
          }
          
          /* Black for Contact section */
          .fp-viewing-seventh .section-name-display {
            color: #000;
          }
          
          /* White for Why ClubHaus section and Modus Operandi section */
          .fp-viewing-fourth .section-name-display,
          .fp-viewing-sixth .section-name-display {
            color: #fff;
          }
          
          /* Red for Our Heart section - Removed as it's now Modus Operandi and should be white */
          
          /* Hide mobile icon everywhere */
          .mobile_icon, div.mobile_icon {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
          }
          
          /* Hide navigation on the first section (homepage) */
          .fp-viewing-first #fp-nav {
            display: none !important;
          }
          
          /* Hide hamburger menu on desktop */
          .mobile-hamburger {
            display: none !important;
          }
          
          /* Show hamburger on all sections for mobile devices */
          @media (max-width: 768px) {
            #fp-nav {
              display: none !important;
            }
            
            /* Always show hamburger on mobile */
            .mobile-hamburger {
              display: block !important;
              position: fixed;
              top: 15px;
              right: 20px;
              width: 40px;
              height: 40px;
              z-index: 1000;
              cursor: pointer;
            }
          }
          
          .hamburger-icon {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          
          .hamburger-icon span {
            display: block;
            width: 30px;
            height: 3px;
            background-color: #329ec7;
            margin: 4px 0;
            transition: all 0.3s ease;
          }
          
          .hamburger-icon.open span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
          }
          
          .hamburger-icon.open span:nth-child(2) {
            opacity: 0;
          }
          
          .hamburger-icon.open span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
          }
          
          /* Mobile navigation menu */
          .mobile-nav-menu {
            position: fixed;
            top: 0;
            right: -250px;
            width: 250px;
            height: 100vh;
            background-color: rgba(41, 58, 141, 0.95);
            z-index: 999;
            transition: right 0.3s ease;
            display: none;
          }
          
          .mobile-nav-menu.open {
            right: 0;
          }
          
          .mobile-nav-items {
            padding: 70px 20px 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          
          .mobile-nav-item {
            display: flex;
            align-items: center;
            color: white;
            cursor: pointer;
            padding: 10px;
            border-left: 3px solid transparent;
            transition: all 0.3s ease;
            position: relative;
            height: 40px; /* Fixed height for consistency */
          }
          
          .mobile-nav-item.active {
            border-left: 3px solid #329ec7;
            background-color: rgba(50, 158, 199, 0.2);
            padding-left: 40px;
          }
          
          .mobile-nav-item.active:before {
            content: "";
            position: absolute;
            left: 10px;
            top: calc(50% - 4px); /* Lift icon up by 4px from center */
            transform: translateY(-50%); /* Center vertically */
            width: 20px;
            height: 20px;
            background-image: url('/Chip.svg');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
          }
          
          /* Mobile nav text alignment */
          .mobile-nav-text {
            font-size: 18px;
            font-weight: bold;
            line-height: 20px; /* Match line height with icon size */
            display: flex;
            align-items: center;
            height: 100%;
          }
          
          /* Use appropriate suit SVG for each mobile navigation item */
          .mobile-nav-item:nth-child(2).active:before {
            background-image: url('/images/SVG/Clubs@8x.svg');
            filter: invert(48%) sepia(85%) saturate(442%) hue-rotate(163deg) brightness(92%) contrast(92%);
          }
          
          .mobile-nav-item:nth-child(3).active:before {
            background-image: url('/Chip.svg');
            filter: invert(48%) sepia(85%) saturate(442%) hue-rotate(163deg) brightness(92%) contrast(92%);
          }
          
          /* Why ClubHaus uses Spade */
          .mobile-nav-item:nth-child(4).active:before {
            background-image: url('/images/SVG/Spade@8x.svg');
            filter: brightness(100) saturate(0%);
            background-color: transparent !important;
          }
          
          /* Turn mobile nav text white on Why ClubHaus page */
          .fp-viewing-fourth .mobile-nav-item {
            color: #fff;
          }
          
          /* Portfolio uses Diamond */
          .mobile-nav-item:nth-child(5).active:before {
            background-image: url('/images/SVG/Diamond@8x.svg');
          }
          
          /* Mobile Heart icon */
          .mobile-nav-item:nth-child(6).active:before {
            background-image: url('/images/SVG/Heart@8x.svg');
            background-color: transparent !important;
            filter: invert(9%) sepia(98%) saturate(7106%) hue-rotate(1deg) brightness(104%) contrast(113%) !important;
          }
          
          /* Make mobile spade black too */
          .mobile-nav-item:nth-child(7).active:before {
            background-image: url('/images/SVG/Spade@8x.svg');
            filter: brightness(0) saturate(100%);
            background-color: transparent !important;
          }
          
          /* Turn all mobile menu items black on Contact page */
          .fp-viewing-seventh .mobile-nav-item {
            color: #000;
          }
          
          /* Ensure mobile menu text is white when the menu is open, overriding section-specific colors */
          .mobile-nav-menu.open .mobile-nav-item {
            color: white !important;
          }
          
          /* Turn all mobile menu items red on Our Heart page */
          .fp-viewing-sixth .mobile-nav-item {
            color: white;
          }
          
          /* Make the Modus Operandi nav items red when on that section */
          .fp-viewing-sixth .mobile-nav-item:nth-child(6) {
            color: #ff0000;
          }
          
          .mobile-nav-item:hover {
            background-color: rgba(50, 158, 199, 0.1);
          }
          
          /* Modified mobile-nav-text with vertical alignment improvements */
          .mobile-nav-text {
            font-size: 18px;
            font-weight: bold;
            line-height: 20px; /* Match line height with icon height */
            display: flex;
            align-items: center;
            height: 100%;
          }
          
          /* Social media icons styling - for contact page only */
          .social-icons {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .social-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
          }
          
          .social-icon:hover {
            background-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-3px);
          }
          
          .social-icon img {
            width: 20px;
            height: 20px;
            filter: brightness(0) invert(1); /* Make icons white */
          }
          
          /* Remove mobile navigation menu specific overrides */
          
          /* Media query for mobile */
          @media (max-width: 768px) {
            #fp-nav {
              display: none !important;
            }
            
            /* Always show hamburger on mobile */
            .mobile-hamburger {
              display: block !important;
            }
            
            .mobile-nav-menu {
              display: block;
            }
            
            /* Center align Heart at Play title on mobile */
            .fp-viewing-sixth .heart_content h2 {
              text-align: center;
            }
            
            /* Mobile vertical alignment fixes */
            .mobile-nav-item {
              align-items: center;
              min-height: 40px; /* Consistent height */
              height: 40px; /* Fixed height for better alignment */
              padding-left: 20px; /* Add padding since we're hiding icons */
            }
            
            /* Hide the icons completely on mobile */
            .mobile-nav-item.active:before {
              display: none !important;
            }
            
            /* Adjust styling for active items since icons are hidden */
            .mobile-nav-item.active {
              border-left: 3px solid #329ec7;
              background-color: rgba(50, 158, 199, 0.2);
              padding-left: 20px; /* Reduce padding since we're hiding icons */
            }
            
            .mobile-nav-item .mobile-nav-text {
              display: flex;
              align-items: center;
            }
          }
          
          /* Mobile nav items with flip effect */
          .mobile-nav-item.active {
            transform-style: preserve-3d;
            transition: transform 0.5s ease;
            animation: mobileFlipAnimation 0.75s ease-out;
          }
          
          @keyframes mobileFlipAnimation {
            0% {
              transform: translateX(-20px) rotateY(0deg);
              opacity: 0.5;
            }
            50% {
              transform: translateX(0px) rotateY(180deg);
              opacity: 0.8;
            }
            100% {
              transform: translateX(0px) rotateY(360deg);
              opacity: 1;
            }
          }
          
          /* Make Heart at Play heading larger */
          .fp-viewing-sixth .heart_content h2 {
            font-size: 2.5rem; /* Increase font size */
          }
          
          /* Make POWERHOUSE text extra bold */
          .second_content h2 strong {
            font-weight: 900;
            letter-spacing: 0.5px;
          }
          
          /* Cool blue hover effect for View All Projects button */
          .project_content .btn2,
          .second_content .btn2 {
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }
          
          .project_content .btn2:before,
          .second_content .btn2:before {
            content: '';
            position: absolute;
            top: 0;
            left: -10px; /* Adjust starting position to cover corner */
            width: 0;
            height: 100%;
            background-color: #329ec7;
            transition: all 0.3s ease;
            z-index: -1;
            transform: skewX(-20deg);
            opacity: 0;
          }
          
          .project_content .btn2:hover,
          .second_content .btn2:hover {
            color: white;
            border-color: #329ec7;
            box-shadow: 0 5px 15px rgba(50, 158, 199, 0.4);
            transform: translateY(-3px);
          }
          
          .project_content .btn2:hover:before,
          .second_content .btn2:hover:before {
            width: 150%; /* Increase width to ensure full coverage */
            opacity: 1;
          }
          
          /* Adjust spacing for Heart at Play section */
          .fp-viewing-sixth .heart_content {
            margin-top: -80px; /* Increased negative margin to move content further upward */
          }
          
          /* Remove unnecessary responsive CSS since we handle it in the component */
          /* Button container styling for About page */
          .second_content .button-container {
            display: flex;
            gap: 20px;
            justify-content: center;
          }
          
          /* Additional styling for the About page buttons */
          .second_content .btn2 {
            display: inline-block;
            padding: 10px 25px;
            color: #329ec7;
            border: 2px solid #329ec7;
            border-radius: 4px;
            font-weight: bold;
            text-decoration: none;
            text-align: center;
            min-width: 150px;
            background: none;
            cursor: pointer;
            font-size: 16px;
            font-family: inherit;
          }
          
          /* End of custom styles */
          
          /* Hide the first navigation dot (Home section) */
          #fp-nav ul li:first-child {
            display: none !important;
          }
          
          /* Define coin spin animation */
          @keyframes coinSpin {
            0% {
              transform: scale(1.3) rotateY(0deg);
            }
            100% {
              transform: scale(1.3) rotateY(180deg);
            }
          }

          /* Hover effect with coin spin animation */
          #fp-nav ul li a:not(.active):hover:before {
            animation: coinSpin 0.6s ease-in-out;
            transform: scale(1.3);
            transform-style: preserve-3d;
            backface-visibility: visible;
          }
          
          /* Add perspective for better 3D effect */
          #fp-nav ul li {
            perspective: 800px;
          }
        `;
        document.head.appendChild(style);
      }}

      onLeave={(origin, destination, direction, currentPanel, fullpageApi,state) => {
        // Update section name when changing sections
        if (destination && destination.index !== undefined) {
          setCurrentSectionName(sectionNames[destination.index]);
          
          // Remove animation restart - just set the style directly
          const activeNavDot = document.querySelector('#fp-nav ul li a.active:before');
          if (activeNavDot) {
            activeNavDot.style.animation = 'none';
            activeNavDot.style.transform = 'scale(1.5)';
            activeNavDot.style.opacity = '1';
          }
          
          // Update theme color based on the current section
          const themeColor = getThemeColorForSection(destination.index);
          
          // Update the theme-color meta tag
          const themeColorMeta = document.querySelector('meta[name="theme-color"]');
          if (themeColorMeta) {
            themeColorMeta.setAttribute('content', themeColor);
          }
        }
      }}
      render={({ state, fullpageApi, origin, currentPanel}) => {

        console.log(state.destination ?? 0);

        // Store API reference
        if (fullpageApi && !fullpageApiRef.current) {
          fullpageApiRef.current = fullpageApi;
          // Ensure we start at the first section
          fullpageApi.moveTo(1);
        }

        if (state.lastEvent === "onLeave" && state.destination.anchor === "third" && activeId != 0 ) {
          fullpageApi.setAllowScrolling(false);
        } else if (fullpageApi) {
          fullpageApi.setAllowScrolling(true);
        }
        currentPanel = 'Pause';
  
        if (state.lastEvent === "onLeave") {
          currentIndex = state.destination.index;
          offset = state.destination.item.offsetTop;

          setCurrentSlider(state.destination.index ?? 0);
          
          // Update section name
          if (state.destination.index !== undefined) {
            setCurrentSectionName(sectionNames[state.destination.index]);
          }
     
          if (state.destination.anchor) {
            currentPanel = state.destination.anchor;
          }
          
          // Get top content element
          const topContent = document.querySelector('.top_content');
          
          // Only handle the first-to-second section transition
          if (state.destination.anchor === 'second' && state.origin.anchor === 'first' && state.direction === 'down') {
            // Only move logo when moving down from first (home) to second (about) section
            const wrapper = document.querySelector('.wrapper');
            if (topContent && wrapper) {
              wrapper.appendChild(topContent);
              topContent.classList.add('active-bar');
            }
          }
          // When navigating to section 2 from any other section (except first)
          else if (state.destination.anchor === 'second' && state.origin.anchor !== 'first') {
            // Ensure the logo is in the top left when going from section 3 back to section 2
            const wrapper = document.querySelector('.wrapper');
            if (topContent && wrapper) {
              // Check if it's already a child of wrapper
              if (topContent.parentElement !== wrapper) {
                wrapper.appendChild(topContent);
              }
              topContent.classList.add('active-bar');
            }
          }
          // Reset logo when returning to home section
          else if (state.destination.anchor === 'first') {
            const wrapper = document.querySelector('.top_section');
            if (topContent && wrapper) {
              wrapper.appendChild(topContent);
              topContent.classList.remove('active-bar');
            }
          }
          // For any other navigation, remove the active-bar class
          else if (state.destination.anchor !== 'second' || state.origin.anchor !== 'first') {
            if (topContent) {
              topContent.classList.remove('active-bar');
            }
          }
          
          console.log(fullpageApi);
        } 

  
        return (
          
          <div style={{'height':'100%'}}>
            {/* Removed the simple navigation dots */}
            
            {/* <Breadcrumbs items={anchors} anchor={currentPanel} /> */}
            <ReactFullpage.Wrapper>
              
              <div className="section" data-anchor="first">
                <Top onClick={onClick} currentScroll={currentIndex} arrowClick={() => fullpageApi.moveSectionDown()} />
              </div>

              <div className="section" data-anchor="second">
                <About paused={currentPanel !== 'second'} arrowClick={() => fullpageApi.moveSectionDown()} /> 
              </div> 

              <div className="section" data-anchor="third" {...handlers} currentactive={activeId}  >
                <Services paused={currentPanel !== 'third'} offset={offset} arrowClick={() => fullpageApi.moveSectionDown()} onClick={onClick} setActiveId={() => setActiveId()} activeId={activeId} onNameChange={onChange}  />
              </div>

              <div className="section" data-anchor="fourth">
                <AboutTwo paused={currentPanel !== 'fourth' } arrowClick={() => fullpageApi.moveSectionDown()}  /> 
              </div> 

              <div className="section" data-anchor="fifth">
                <ProjectSlider  arrowClick={() => fullpageApi.moveSectionDown()} projectClick= {() => {fullpageApi.silentMoveTo('sixth'); console.log('clicker')}} />
              </div>

              <div className="section" data-anchor="sixth">
                <HeartSection paused={currentPanel !== 'sixth'} arrowClick={() => fullpageApi.moveSectionDown()} />
              </div>

              <div className="section" data-anchor="seventh">
                <Contact paused={currentPanel !== 'seventh'} arrowClick={() => fullpageApi.moveSectionDown()} />
              </div>

            </ReactFullpage.Wrapper>
          </div>
         
        );
      }}
    />
     </>
  );
}