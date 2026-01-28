import React from 'react';

function ProjectCard({
  project,
  backgroundColor = "#293a8d",
  textColor = "#ffffff",
  borderRadius = 0,
  showBorder = false,
  onChevronClick,
  onProjectClick, // New prop for navigating to project detail
}) {
  const handleChevronClick = (e) => {
    e.stopPropagation();
    if (onProjectClick && project?.id) {
      // Navigate to project detail page
      onProjectClick(project.id);
    } else if (onChevronClick) {
      // Fallback to next card
      onChevronClick();
    }
  };

  return (
    <>
      <style>{`
        .project-card-fullscreen {
          width: 100%;
          height: 100%;
          background-color: ${backgroundColor};
          background-image: ${project.image ? `url(${project.image})` : 'none'};
          background-size: cover;
          background-position: center center;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0;
        }
        .project-card-fullscreen::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(255, 255, 255, 0.98) 0%,
            rgba(255, 255, 255, 0.9) 15%,
            rgba(255, 255, 255, 0.75) 25%,
            rgba(255, 255, 255, 0.55) 35%,
            rgba(255, 255, 255, 0.35) 42%,
            rgba(255, 255, 255, 0.18) 48%,
            rgba(255, 255, 255, 0.08) 52%,
            transparent 58%
          );
          z-index: 1;
        }
        .project-card-fullscreen::after {
          content: '';
          position: absolute;
          inset: 20px;
          border-radius: ${Math.max(8, borderRadius - 20)}px;
          pointer-events: none;
          z-index: 10;
          background: linear-gradient(to bottom, 
            rgba(255, 255, 255, 1) 0%, 
            rgba(255, 255, 255, 0.8) 20%,
            rgba(41, 58, 141, 0.5) 60%,
            rgba(41, 58, 141, 1) 100%
          );
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          mask-composite: exclude;
          padding: 4px;
          clip-path: polygon(
            0 0,
            calc(100% - 64px) 0,
            calc(100% - 64px) 20px,
            calc(100% - 20px) 20px,
            calc(100% - 20px) 64px,
            100% 64px,
            100% 100%,
            0 100%
          );
        }
        .project-card-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 60%;
        }
        .project-card-logo {
          max-width: 640px;
          max-height: 400px;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));
        }
        .project-card-title {
          position: absolute;
          bottom: 30px;
          left: 50px;
          right: 30px;
          text-align: left;
          color: #293a8d;
          z-index: 2;
        }
        .project-card-title h3 {
          margin: 0;
          font-family: eurostile, sans-serif;
          font-weight: 700;
          letter-spacing: 1px;
          font-size: clamp(32px, 6vw, 56px);
          word-wrap: break-word;
          text-shadow: 0 2px 4px rgba(255,255,255,0.8);
        }
        .project-card-title span {
          display: block;
          font-size: clamp(16px, 2.5vw, 24px);
          margin-top: 12px;
          font-family: eurostile, sans-serif;
          opacity: 0.9;
          text-shadow: 0 1px 3px rgba(255,255,255,0.8);
        }
        @media (max-width: 520px) {
          .project-card-logo {
            max-width: 480px;
            max-height: 300px;
          }
          .project-card-title {
            bottom: 20px;
            left: 35px;
            right: 20px;
          }
        }
      `}</style>
      <div className="project-card-fullscreen">
        <div style={{ 
          position: 'absolute',
          top: 16,
          right: 16,
          width: 52,
          height: 52,
          zIndex: 11
        }}>
          <img src="/images/logo.png" alt="" style={{ width: '100%', height: 'auto', position: 'relative', filter: 'brightness(0) invert(1) drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }} />
        </div>
        {project.logo && (
          <div className="project-card-content">
            <img src={project.logo} alt="" className="project-card-logo" />
          </div>
        )}
        <div className="project-card-title">
          <h3>{project.title}</h3>
          {project.subtitle ? <span>{project.subtitle}</span> : null}
        </div>
        {(onChevronClick || onProjectClick) && (
          <div className="container_2_right" onClick={handleChevronClick}>
            <div className="chevron_right blue"></div>
            <div className="chevron_right blue"></div>
            <div className="chevron_right blue"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProjectCard;
