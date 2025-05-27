import React from 'react';
import Alt_background from '../components/alt_background/Alt_background';
import TeamMemberCard from '../components/TeamMemberCard';

// Sample team member data (replace with actual team data)
const teamMembers = [
  {
    name: "Jane Doe",
    title: "Creative Director",
    photo: "/images/team/placeholder1.jpg",
    silhouette: "/images/team/silhouette1.png" 
  },
  {
    name: "John Smith",
    title: "Art Director",
    photo: "/images/team/placeholder2.jpg",
    silhouette: "/images/team/silhouette2.png"
  },
  {
    name: "Alex Johnson",
    title: "Lead Developer",
    photo: "/images/team/placeholder3.jpg",
    silhouette: "/images/team/silhouette3.png"
  },
  {
    name: "Sam Wilson",
    title: "Account Manager",
    photo: "/images/team/placeholder4.jpg",
    silhouette: "/images/team/silhouette4.png"
  },
  {
    name: "Emma Brown",
    title: "Strategist",
    photo: "/images/team/placeholder5.jpg",
    silhouette: "/images/team/silhouette5.png"
  },
  {
    name: "Michael Rodriguez",
    title: "Designer",
    photo: "/images/team/placeholder6.jpg",
    silhouette: "/images/team/silhouette6.png"
  }
];

export default function TeamSection({ paused, arrowClick }) {
  return (
    <div className="team_section">
      <Alt_background arrowClick={arrowClick} />
      
      <div className="team_wrapper container">
        <div className="team_content">
          <h2>OUR TEAM</h2>
          <p>Meet the talented individuals behind ClubHaus' success.</p>
          
          <div className="team_members_grid">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                title={member.title}
                photo={member.photo}
                silhouette={member.silhouette}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 