import './App.css';
import './Mobile.css';
import Fullpage from './Fullpage';
import React, { useEffect } from 'react';
import ContactFixed from './home/ContactFixed'
import MobileMenu from './MobileMenu';
// import Cursor from './components/Cursor'
import PortfolioSlider from './home/PortfolioSlider';
import { Routes, Route, useLocation } from 'react-router-dom';
import Portfolio from './portfolio/Portfolio';
import ProjectDetails from './projects/ProjectDetails';
import Projects from './projects/Projects';

const App = () => {
  
    console.log('🧪 APP COMPONENT IS RUNNING - TEST MESSAGE');
    console.log('🧪 If you see this, React is working!');
    
    const [showResults, setShowResults] = React.useState(false)
    const showContact = () => setShowResults(true)
    const hideContact = () => setShowResults(false)

    const [isOpen, setIsOpen] = React.useState(false);
    const toggleOpen = () => setIsOpen(!isOpen)

    // Force scroll to top and remove hash on initial load
    useEffect(() => {
      // Clear any hash in the URL
      if (window.location.hash) {
        window.history.replaceState(null, null, window.location.pathname);
      }
      
      // Force scroll to top
      window.scrollTo(0, 0);
      
      // Add a class to html to prevent scrolling until fullpage takes over
      document.documentElement.style.overflow = 'hidden';
      
      // Reset after fullpage initializes - reduced timeout for better responsiveness
      setTimeout(() => {
        document.documentElement.style.overflow = '';
        // Force a resize event to help fullpage.js recalculate heights
        window.dispatchEvent(new Event('resize'));
      }, 500); // Reduced from 1000ms to 500ms
      
    }, []);

  const location = useLocation();

  return (
    <div className="App">
      <Routes>
        {/* Project routes */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        
        {/* Catch-all route for main sections */}
        <Route path="*" element={<Fullpage onClick={showContact} setIsOpen={toggleOpen} />} />
      </Routes>

      { window.location.href.indexOf('contact') > -1 ? <ContactFixed onClick={hideContact}/> : null }
      { isOpen ? <MobileMenu/> : null }
    </div>
  )
};

export default App;