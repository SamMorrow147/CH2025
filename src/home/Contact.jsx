import Contact_card from '../components/Contact_card';
import Background from '../home/Background'
import React from 'react';

const Contact = () => {
    return (    
      <div className="services_section">
          <Contact_card/>
          
          {/* Social Media Icons - repositioned to bottom right */}
          <div className="contact-social-icons">
            <a href="https://www.linkedin.com/company/clubhaus" target="_blank" rel="noopener noreferrer" className="contact-social-icon">
              <img src="/images/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com/clubhausagency" target="_blank" rel="noopener noreferrer" className="contact-social-icon">
              <img src="/images/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/clubhaus_agency" target="_blank" rel="noopener noreferrer" className="contact-social-icon">
              <img src="/images/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
    );
}

export default Contact;
