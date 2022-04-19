import './App.css';
import './Mobile.css';
import Fullpage  from './Fullpage';
import React from 'react';
import ContactFixed from './home/ContactFixed'
import MobileMenu from './MobileMenu';
// import Cursor from './components/Cursor'
import PortfolioSlider from './home/PortfolioSlider';
const App = () => {
  


    const [showResults, setShowResults] = React.useState(false)
    const showContact = () => setShowResults(true)
    const hideContact = () => setShowResults(false)

    const [isOpen, setIsOpen] = React.useState(false);
    const toggleOpen = () => setIsOpen(!isOpen)


  return (
   
  <div className="wrapper">
    {/* <Cursor/> */}
    
        <Fullpage onClick={showContact} setIsOpen={toggleOpen} /> 

    { window.location.href.indexOf('contact') > -1 ? <ContactFixed onClick={hideContact}/> : null }
    { isOpen ? <MobileMenu/> : null }



  </div>

  )
};


export default App;