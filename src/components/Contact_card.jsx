import React, { useState, useEffect } from 'react';
import '../form.css';

const ContactCard = ({ formId = '243296452837062' }) => {
  const [iframeHeight, setIframeHeight] = useState(465);

  useEffect(() => {
    const handleMessage = (event) => {
      // Ensure the message is from JotForm
      if (event.origin === 'https://form.jotform.com') {
        try {
          const data = JSON.parse(event.data);
          if (data.type === 'setHeight') {
            setIframeHeight(data.height);
          }
        } catch (error) {
          console.error('Error parsing message:', error);
        }
      }
    };

    // Add message event listener
    window.addEventListener('message', handleMessage);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

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
          minWidth: '100%',
          maxWidth: '100%',
          height: `${iframeHeight}px`,
          border: 'none'
        }}
        scrolling="no"
      />
    </div>
  );
};

export default ContactCard;