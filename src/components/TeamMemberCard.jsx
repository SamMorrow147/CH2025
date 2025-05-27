import React from 'react';
import '../styles/TeamMemberCard.css';

const TeamMemberCard = ({ name, title, photo, silhouette }) => {
  return (
    <div className="team-card">
      <div className="wrapper">
        <img 
          src={photo} 
          alt={`${name} - ${title}`} 
          className="cover-image" 
        />
      </div>
      <div className="name-plate">
        <h3 className="member-name">{name}</h3>
        <p className="member-title">{title}</p>
      </div>
      {silhouette && (
        <img 
          src={silhouette} 
          alt={`${name} silhouette`} 
          className="character" 
        />
      )}
    </div>
  );
};

export default TeamMemberCard; 