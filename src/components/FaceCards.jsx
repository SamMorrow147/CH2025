import React, { useState } from 'react';
import '../styles/FaceCards.css';

// Team member data
const teamMembers = [
  {
    name: "Sam Morrow",
    title: "CCO",
    photo: "/images/team/Sam-Back .png",
    character: "/images/team/Sam-Front.png",
    bio: "The creative force behind Clubhaus, Sam sets the vision, tone, and aesthetic for everything we build. He blends strategy with style, making sure every project hits hard and looks good doing it. Mostly found sketching concepts, obsessing over type, or rethinking the entire internet."
  },
  {
    name: "Noah Morrow",
    title: "CTO, DEV",
    photo: "/images/team/Noah-Back.png",
    character: "/images/team/Noah-Front.png",
    bio: "Noah decodes the matrix and turns wild ideas into functional, fast-loading realities. He's fluent in frameworks, allergic to bloated code, and always two steps ahead of the tech curve. Basically, if it clicks, scrolls, or loads—it's Noah."
  },
  {
    name: "Darby Shaw",
    title: "AD, BFA",
    photo: "/images/team/Darby-Back.png",
    character: "/images/team/Darby-Front.png",
    bio: "Darby brings the fine art edge to our digital world, with a BFA to back it up. She leads design with taste, intention, and a killer sense of composition. If it looks effortlessly cool, she probably made it."
  },
  {
    name: "Liam Ellis",
    title: "AI, ML, UX",
    photo: "/images/team/Laim-Back.png",
    character: "/images/team/Liam-Front.png",
    bio: "Liam is our machine whisperer, turning prompts into power tools. He prototypes, refines, and automates like it's second nature, making AI actually useful. Expect big brain energy and a surprisingly human-centered approach to all things technical."
  }
];

const FaceCards = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (member) => {
    if (selectedMember === member) {
      setSelectedMember(null);
      setIsFlipped(false);
    } else {
      setSelectedMember(member);
      setIsFlipped(true);
    }
  };

  return (
    <div className="face-cards-section">
      <div className="face-cards-container">
        <h2 className="face-cards-title">
          <span className="title-bold">The Creative Leaders</span>
          <span className="title-light">You're Dealing With.</span>
        </h2>

        <div className="face-cards-grid">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className={`face-card ${selectedMember === member ? 'selected' : ''} ${isFlipped ? 'flipped' : ''}`}
              onClick={() => handleCardClick(member)}
            >
              <div className="face-card-inner">
                {/* Front - Character Animation */}
                <div className="face-card-front">
                  <div className="face-card-image">
                    <img
                      src={member.character}
                      alt={`${member.name} character`}
                    />
                  </div>
                </div>

                {/* Back - Team Member Photo */}
                <div className="face-card-back">
                  <div className="face-card-photo">
                    <img
                      src={member.photo}
                      alt={member.name}
                    />
                  </div>
                  <div className="face-card-info">
                    <h3>{member.name}</h3>
                    <h4>{member.title}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Panel */}
        {selectedMember && (
          <div className="face-card-info-panel">
            <div className="info-panel-content">
              <h3>{selectedMember.name}</h3>
              <h4>{selectedMember.title}</h4>
              <p className="bio-text">{selectedMember.bio}</p>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FaceCards; 