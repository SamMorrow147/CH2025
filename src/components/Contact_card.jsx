import React from 'react';
import '../form.css';

const ContactCard = ({ formId = '243296452837062' }) => {
  return (
    <div className="contact_card">
      <iframe 
        id={`JotFormIFrame-${formId}`}
        title="Form"
        src={`https://form.jotform.com/${formId}`}
        allow="geolocation; microphone; camera; fullscreen"
        allowTransparency={true}
        frameBorder="0"
        style={{
          width: '100%',
          height: '600px',
          border: 'none'
        }}
        scrolling="yes"
      />
    </div>
  );
};

export default ContactCard;