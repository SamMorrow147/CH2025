import './App.css';
import './Mobile.css';
import Fullpage  from './fullpage';
import React, { Component, useEffect, useState } from 'react';
import Menu from './Menu';
import Contact_fixed from './home/Contact_fixed'
import {doSomething} from './functions'


const App = () => {
    const [showResults, setShowResults] = React.useState(false)
    const showContact = () => setShowResults(true)
    const hideContact = () => setShowResults(false)



    doSomething();
    
  return (
  <div className="wrapper">
    <Menu/>
    <Fullpage onClick={showContact} /> 
    { showResults ? <Contact_fixed onClick={hideContact}/> : null }
  </div>
  )
};


export default App;