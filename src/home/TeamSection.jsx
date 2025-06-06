import React from 'react';
import Alt_background from '../components/alt_background/Alt_background';

export default function TeamSection({ paused, arrowClick }) {
  return (
    <div className="team_section">
      <Alt_background arrowClick={arrowClick} />
      
      <div className="team_container" style={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 20px'
      }}>
        <h2 style={{ 
          color: '#293a8d', 
          fontSize: '70px', 
          marginBottom: '20px',
          textAlign: 'center'
        }}>FACE CARDS</h2>
        
        <p style={{ 
          color: '#293a8d', 
          fontSize: '36px', 
          marginBottom: '60px', 
          maxWidth: '800px', 
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          The Creative Leaders You'll Be Dealing With.
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '40px',
          flexWrap: 'wrap',
          maxWidth: '1200px'
        }}>
          <TeamCard 
            name="Sam" 
            title="Creative Director" 
            image="/images/PortfolioSlider/slide1.jpg" 
          />
          <TeamCard 
            name="Noah" 
            title="Art Director" 
            image="/images/PortfolioSlider/slide2.jpg" 
          />
          <TeamCard 
            name="Darby" 
            title="Lead Developer" 
            image="/images/PortfolioSlider/slide3.jpg" 
          />
        </div>
      </div>
    </div>
  );
}

function TeamCard({ name, title, image }) {
  return (
    <div style={{ 
      width: '300px',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
      backgroundColor: 'white',
      transition: 'transform 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ height: '350px', overflow: 'hidden' }}>
        <img 
          src={image} 
          alt={name} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' 
          }} 
        />
      </div>
      <div style={{ 
        padding: '20px', 
        textAlign: 'center'
      }}>
        <h3 style={{ 
          margin: '0 0 5px 0', 
          color: '#293a8d', 
          fontSize: '24px' 
        }}>
          {name}
        </h3>
        <p style={{ 
          margin: '0', 
          color: '#329ec7', 
          fontSize: '16px' 
        }}>
          {title}
        </p>
      </div>
    </div>
  );
} 