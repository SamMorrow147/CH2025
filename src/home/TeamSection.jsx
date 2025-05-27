import React from 'react';
import Alt_background from '../components/alt_background/Alt_background';

export default function TeamSection({ paused, arrowClick }) {
  return (
    <div className="team_section">
      <Alt_background arrowClick={arrowClick} />
      
      <div className="team_wrapper container">
        <div className="team_content">
          <h2>OUR TEAM</h2>
          <p>Meet the talented individuals behind ClubHaus' success.</p>
          
          {/* Team member grid will go here */}
          <div className="team_members_grid">
            {/* Placeholder for team members that will be added later */}
          </div>
        </div>
      </div>
    </div>
  );
} 