import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import './App.css';
import './Mobile.css';
import './form.css';
import './styles/TeamMemberCard.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

// Force scroll to top on page load
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  // Remove any hash in the URL
  if (window.location.hash) {
    window.history.replaceState(null, null, window.location.pathname);
  }
};

// Add a small script to force starting at top
const scrollToTop = () => {
  window.scrollTo(0, 0);
};
// Call immediately
scrollToTop();
// And also after a slight delay to ensure it happens after all loads
setTimeout(scrollToTop, 100);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
