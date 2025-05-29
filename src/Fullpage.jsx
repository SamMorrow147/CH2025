import Top from './home/Top'
import About from './home/About'
import MainMenu from './home/MainMenu';
import HeartSection from './home/HeartSection'
import TeamSectionWhite from './home/TeamSectionWhite'
import Services from './home/Services';
import React, {useState, useEffect, useRef} from 'react';
import Contact from './home/Contact'
import ReactFullpage from '@fullpage/react-fullpage';
import { useSwipeable } from "react-swipeable";
import ProjectSlider from './projects/ProjectSlider'
import AboutTwo from './home/AboutTwo';
import { trackSectionView, trackSectionExit, trackSectionMetrics } from './utils/analytics';

const anchors = ["first", "second", "third","fourth","fifth", "sixth", "seventh", "eighth"];
const sectionNames = ['Home', 'Who We Are', 'Our Services', 'Feeling Lucky?', 'Recent Projects', 'Modus Operandi', 'Face Cards', 'Reach Out'];

// Section theme colors mapping
const sectionThemeColors = {
  first: '#293a8d', // Home - dark blue (same as navigation)
  second: '#293a8d', // Who We Are - dark blue
  third: '#ffffff', // Services - white
  fourth: '#293a8d', // Why ClubHaus - dark blue 
  fifth: '#ffffff', // Our Work - white
  sixth: '#293a8d', // Modus Operandi - dark blue (same as navigation)
  seventh: '#ffffff', // Face Cards - white
  eighth: '#ffffff', // Reach Out - white
};

// Function to get the appropriate theme color based on section
const getThemeColorForSection = (sectionIndex) => {
  if (sectionIndex === undefined || sectionIndex < 0 || sectionIndex >= anchors.length) {
    return '#293a8d'; // Default dark blue color
  }
  
  const sectionAnchor = anchors[sectionIndex];
  
  // Return the color from our mapping
  return sectionThemeColors[sectionAnchor] || '#293a8d';
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

  // Analytics tracking state
  const [sectionEntryTime, setSectionEntryTime] = useState(Date.now());
  const [sectionMetrics, setSectionMetrics] = useState(() => {
    // Initialize metrics object for each section
    const metrics = {};
    sectionNames.forEach(section => {
      metrics[section] = { totalTime: 0, visits: 0 };
    });
    return metrics;
  });

  // Force scroll to top on mount
  useEffect(() => {
    // Immediately scroll to top
    window.scrollTo(0, 0);
    
    // Clear any hash to prevent auto-scrolling
    if (window.location.hash) {
      window.history.replaceState(null, null, ' ');
    }
    
    // Special handling for production environment (Vercel)
    // This ensures fullpage.js initializes correctly
    const isProduction = process.env.NODE_ENV === 'production';
    
    // Wait for component to fully mount then scroll to top again
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      if (fullpageApiRef.current) {
        fullpageApiRef.current.moveTo(1);
        
        // Additional initialization for production environment
        if (isProduction) {
          // Force a resize event to help fullpage.js recalculate heights
          window.dispatchEvent(new Event('resize'));
          
          // Additional timeout to ensure fullpage has fully initialized
          setTimeout(() => {
            if (fullpageApiRef.current) {
              // Rebuild fullpage to ensure correct initialization
              fullpageApiRef.current.reBuild();
              fullpageApiRef.current.setAllowScrolling(true);
            }
          }, 300);
        }
      }
    }, isProduction ? 500 : 150);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  // Analytics tracking effect - separate from initialization
  useEffect(() => {
    // Add beforeunload event to track final metrics
    const handleBeforeUnload = () => {
      // Calculate final metrics for current section
      const timeSpent = Date.now() - sectionEntryTime;
      const currentSectionIndex = currentSlider >= 0 && currentSlider < sectionNames.length ? currentSlider : 0;
      const currentSectionName = sectionNames[currentSectionIndex];
      
      // Send final tracking data for current section
      trackSectionExit(currentSectionName, sectionEntryTime);
      
      // Update and send final metrics
      const updatedMetrics = {...sectionMetrics};
      updatedMetrics[currentSectionName].totalTime += Math.round(timeSpent / 1000);
      updatedMetrics[currentSectionName].visits += 1;
      trackSectionMetrics(updatedMetrics);
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [currentSlider, sectionEntryTime, sectionMetrics]);

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
  delta: 5,                             // min distance(px) before a swipe starts. *See Notes*
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
    // Toggle mobile menu state without affecting any animation
    setMobileMenuOpen(!mobileMenuOpen);
    
    // IMPORTANT: Don't manipulate the top_content or logo elements at all
    // Simply toggling the state value will control the menu through CSS
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
      touchSensitivity={20}
      navigation={true}
      navigationPosition={'top'}
      showActiveTooltip={false}
      navigationTooltips={sectionNames}
      scrollingSpeed={300}
      normalScrollElements=''
      bigSectionsDestination='top'
      scrollOverflow={true}
      scrollOverflowReset={true}
      keyboardScrolling={true}
      continuousVertical={false}
      resetSliders={true}
      animateAnchor={true}
      licenseKey={'YOUR_KEY_HERE'} // This is often needed for production builds
      
      // Add these to control scroll behavior better
      fitToSection={true}
      fitToSectionDelay={150}
      scrollBar={false}
      easingcss3={'ease-out'}
      easing={'easeOutQuart'}
      css3={true}
      loopHorizontal={false}
      
      // Modified onLeave function with section skipping prevention
      onLeave={(origin, destination, direction, currentPanel, fullpageApi, state) => {
        // Only prevent section skipping for mouse wheel or touch events
        // Always allow navigation clicks to work
        
        // Get the distance between sections
        const sectionDistance = Math.abs(destination.index - origin.index);
        
        // Check if this is a navigation click by looking at the event type and target
        const isNavigationClick = 
          (typeof window.event !== 'undefined' && 
           window.event && 
           (window.event.type === 'click' || 
            (window.event.target && window.event.target.closest('#fp-nav'))));
        
        // Detect Chrome browser
        const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
        
        // Special handling for Chrome when scrolling from first to second section
        if (isChrome && 
            direction === 'down' && 
            origin.index === 0 && 
            destination.index > 1) {
          
          // Force navigation to section 2 instead of skipping
          if (fullpageApi) {
            // Completely disable scrolling temporarily
            fullpageApi.setAllowScrolling(false);
            
            // Force navigation to section 2
            fullpageApi.moveTo(2);
            
            // Re-enable scrolling after transition completes
            setTimeout(() => {
              fullpageApi.setAllowScrolling(true);
            }, 350);
          }
          return false;
        }
        
        // Chrome-specific handling for any scrolling from home
        if (isChrome && origin.index === 0 && direction === 'down') {
          // Always force navigation to section 2 from home on Chrome
          if (fullpageApi) {
            // Disable scrolling to prevent additional scrolls
            fullpageApi.setAllowScrolling(false);
            
            // Force section 2
            fullpageApi.moveTo(2);
            
            // Re-enable scrolling after transition
            setTimeout(() => {
              fullpageApi.setAllowScrolling(true);
            }, 350);
            
            // Don't proceed with normal navigation
            return false;
          }
        }
        
        // Only prevent scroll-based section skipping (not navigation clicks)
        if (direction && sectionDistance > 1 && !isNavigationClick) {
          // Only prevent wheel/touch skipping, not navigation clicks
          return false;
        }
        
        // Update section name when changing sections
        if (destination && destination.index !== undefined) {
          try {
            // Navigation updates
            const prevSectionName = sectionNames[origin.index];
            const nextSectionName = sectionNames[destination.index];
            setCurrentSectionName(nextSectionName);
            
            // Analytics tracking - don't allow this to block navigation
            setTimeout(() => {
              try {
                // Track exit from previous section
                const timeSpent = Date.now() - sectionEntryTime;
                trackSectionExit(prevSectionName, sectionEntryTime);
                
                // Update metrics in a non-blocking way
                setSectionMetrics(prev => {
                  const updatedMetrics = {...prev};
                  if (updatedMetrics[prevSectionName]) {
                    updatedMetrics[prevSectionName].totalTime += Math.round(timeSpent / 1000);
                    updatedMetrics[prevSectionName].visits += 1;
                  }
                  return updatedMetrics;
                });
                
                // Set entry time for new section
                setSectionEntryTime(Date.now());
                
                // Track view of new section
                trackSectionView(nextSectionName);
              } catch (e) {
                console.error("Analytics tracking error:", e);
              }
            }, 0);
            
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
          } catch (error) {
            console.error("Error in onLeave:", error);
            // Don't block navigation even if there's an error
          }
        }
        
        // Allow navigation to proceed
        return true;
      }}
      
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
              
              // Start tracking the first section
              setSectionEntryTime(Date.now());
              trackSectionView(sectionNames[0]);
              
              // Ensure scroll is enabled
              window.fullpage_api.setAllowScrolling(true);
              
              // Add additional event listeners for scroll troubleshooting
              document.addEventListener('wheel', function(event) {
                // On wheel event, make sure scrolling is enabled
                if (window.fullpage_api) {
                  window.fullpage_api.setAllowScrolling(true);
                }
              });
              
              // Touch events for mobile
              document.addEventListener('touchmove', function(event) {
                // On touch move, make sure scrolling is enabled
                if (window.fullpage_api) {
                  window.fullpage_api.setAllowScrolling(true);
                }
              });
              
              // Add Chrome-specific scroll handling
              // Detect Chrome browser
              const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
              
              if (isChrome) {
                console.log("Chrome detected, adding special scroll handling");
                
                // Track scroll state
                let isScrolling = false;
                let lastScrollTime = 0;
                const scrollDebounceTime = 400; // ms to wait between scroll events - shorter time
                
                // Use capture phase to intercept all wheel events before they reach fullpage
                document.addEventListener('wheel', function(event) {
                  const now = Date.now();
                  
                  // If we're already in a scrolling transition or it's too soon, block all scrolls
                  if (isScrolling || (now - lastScrollTime < scrollDebounceTime)) {
                    event.preventDefault();
                    event.stopPropagation();
                    return false;
                  }
                  
                  // We're specifically targeting first section scroll down issue
                  if (window.fullpage_api && window.fullpage_api.getActiveSection().index === 0 && event.deltaY > 0) {
                    // Prevent default scrolling behavior
                    event.preventDefault();
                    event.stopPropagation();
                    
                    // Manually navigate to section 2
                    isScrolling = true;
                    window.fullpage_api.setAllowScrolling(false);
                    window.fullpage_api.moveTo(2);
                    
                    // Update scroll timestamp
                    lastScrollTime = now;
                    
                    // Reset state after transition
                    setTimeout(() => {
                      isScrolling = false;
                      window.fullpage_api.setAllowScrolling(true);
                    }, 350);
                    
                    return false;
                  }
                }, { passive: false, capture: true }); // Use capture phase to get events first
              }
              
              // Add specific handler for the video container to ensure scrolling works
              const videoContainers = document.querySelectorAll('.video-container');
              videoContainers.forEach(container => {
                container.addEventListener('wheel', function(event) {
                  // Prevent default to avoid any native scrolling
                  event.preventDefault();
                  
                  // Determine scroll direction
                  const delta = event.deltaY || -event.wheelDelta || event.detail;
                  const direction = delta > 0 ? 'down' : 'up';
                  
                  // Manually trigger fullpage scrolling based on direction
                  if (direction === 'down' && window.fullpage_api) {
                    window.fullpage_api.moveSectionDown();
                  } else if (direction === 'up' && window.fullpage_api) {
                    window.fullpage_api.moveSectionUp();
                  }
                }, { passive: false }); // passive: false is needed to allow preventDefault()
              });
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
            z-index: 1000 !important; /* Ensure high z-index */
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
            cursor: pointer; /* Ensure cursor indicates clickable */
            padding: 5px; /* Add padding to increase hit area */
          }
          
          /* Emphasize the clickable nature on hover */
          #fp-nav ul li:hover {
            transform: scale(1.1);
            transition: transform 0.2s ease;
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
          
          /* Use Chip for Who We Are section */
          .fp-viewing-second #fp-nav ul li a.active:before {
            background-image: url('/Chip.svg');
          }
          
          /* Use blue Clubs for Services section (same as Who We Are) */
          .fp-viewing-third #fp-nav ul li a.active:before {
            background-image: url('/images/SVG/Clubs@8x.svg');
          }
          
          /* Use White Spade for Why ClubHaus section */
          .fp-viewing-fourth #fp-nav ul li a.active:before {
            background-image: url('/images/SVG/Spade@8x.svg');
            background-color: transparent !important;
            filter: brightness(100) saturate(0%) invert(100%) !important;
            opacity: 1;
          }
          
          /* Use RED Heart SVG for Modus Operandi section */
          .fp-viewing-sixth #fp-nav ul li a.active:before {
            background-image: url('/images/SVG/Heart@8x.svg');
            background-color: transparent !important;
            filter: invert(9%) sepia(98%) saturate(7106%) hue-rotate(1deg) brightness(104%) contrast(113%) !important;
            opacity: 1;
          }
          
          /* Use Clubs for Team section */
          .fp-viewing-seventh #fp-nav ul li a.active:before {
            background-image: url('/images/SVG/Clubs@8x.svg');
            filter: invert(48%) sepia(85%) saturate(442%) hue-rotate(163deg) brightness(92%) contrast(92%);
          }
          
          /* Use Spades for Contact section */
          .fp-viewing-eighth #fp-nav ul li a.active:before {
            background-image: url('/images/SVG/Spade@8x.svg');
            filter: brightness(0) saturate(100%);
            background-color: transparent !important;
          }
          
          /* Use Diamonds for Portfolio section */
          .fp-viewing-fifth #fp-nav ul li a.active:before {
            background-image: url('/images/SVG/Diamond@8x.svg');
          }
          
          /* Style tooltips to show on hover */
          #fp-nav ul li .fp-tooltip {
            display: block;
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.3s ease;
            transform: translateY(10px);
            color: #293a8d; /* Dark blue brand color */
            font-weight: bold;
            font-family: eurostile, sans-serif;
            top: 40px;
            right: auto;
            left: 50%;
            transform: translateX(-50%) translateY(10px);
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 6px 12px;
            background-color: rgba(255, 255, 255, 0.95);
            border-radius: 4px;
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
            text-align: center;
            width: auto;
            white-space: nowrap;
            pointer-events: none;
          }
          
          /* Show tooltip on hover for non-active dots */
          #fp-nav ul li:hover .fp-tooltip {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
            transition-delay: 0.1s;
          }
          
          /* Hide tooltip for active dot */
          #fp-nav ul li a.active + .fp-tooltip {
            display: none;
          }
          
          /* Special styling for dark sections */
          .fp-viewing-fourth #fp-nav ul li .fp-tooltip,
          .fp-viewing-sixth #fp-nav ul li .fp-tooltip {
            color: white;
            background-color: rgba(41, 58, 141, 0.95);
            font-weight: 700;
          }
          
          /* Special styling for Modus Operandi section */
          .fp-viewing-sixth #fp-nav ul li:nth-child(6) .fp-tooltip {
            color: #ff0000;
            background-color: rgba(0, 0, 0, 0.8);
            font-weight: 800;
          }
          
          /* Special styling for Contact section */
          .fp-viewing-seventh #fp-nav ul li .fp-tooltip {
            color: #000;
            font-weight: 700;
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
          
          /* Dark blue for Third (Services) and Fifth (Our Work) sections */
          .fp-viewing-third .section-name-display,
          .fp-viewing-fifth .section-name-display {
            color: #293a8d;
          }
          
          /* Black for Contact section */
          .fp-viewing-seventh .section-name-display {
            color: #000;
          }
          
          /* White for Why ClubHaus section (fourth) and Modus Operandi section (sixth) */
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
            background-image: url('/Chip.svg');
            filter: invert(48%) sepia(85%) saturate(442%) hue-rotate(163deg) brightness(92%) contrast(92%);
          }
          
          .mobile-nav-item:nth-child(3).active:before {
            background-image: url('/images/SVG/Clubs@8x.svg');
            filter: invert(48%) sepia(85%) saturate(442%) hue-rotate(163deg) brightness(92%) contrast(92%);
          }
          
          /* Why ClubHaus uses White Spade */
          .mobile-nav-item:nth-child(4).active:before {
            background-image: url('/images/SVG/Spade@8x.svg');
            filter: brightness(100) saturate(0%) invert(100%);
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
          
          /* Our Team uses Clubs */
          .mobile-nav-item:nth-child(7).active:before {
            background-image: url('/images/SVG/Clubs@8x.svg');
            filter: invert(48%) sepia(85%) saturate(442%) hue-rotate(163deg) brightness(92%) contrast(92%);
          }
          
          /* Make mobile spade black for Contact */
          .mobile-nav-item:nth-child(8).active:before {
            background-image: url('/images/SVG/Spade@8x.svg');
            filter: brightness(0) saturate(100%);
            background-color: transparent !important;
          }
          
          /* Turn all mobile menu items black on Contact page */
          .fp-viewing-eighth .mobile-nav-item {
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
            font-weight: 700;
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
            font-weight: 400;
            text-decoration: none;
            text-align: center;
            min-width: 150px;
            background: none;
            cursor: pointer;
            font-size: 24px;
            font-family: 'eurostile-condensed', sans-serif;
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
                <TeamSectionWhite paused={currentPanel !== 'seventh'} arrowClick={() => fullpageApi.moveSectionDown()} />
              </div>

              <div className="section" data-anchor="eighth">
                <Contact paused={currentPanel !== 'eighth'} arrowClick={() => fullpageApi.moveSectionDown()} />
              </div>

            </ReactFullpage.Wrapper>
          </div>
         
        );
      }}
    />
     </>
  );
}