import City from '../animations/City.jsx'
import Background from './Background'
import React, { Suspense, lazy } from 'react';
import DownArrow from '../components/DownArrow.jsx';
const Typist = lazy(() => import('react-typist'));

export default function AboutTwo(props) {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  return (
    <div className="heart_section white_background">
      {props.paused === false ? <Background white={true} /> : ''}
      {props.paused === false ? (
        <div className="content_wrapper container">
          <div className="video" style={{ width: '100%' }}>
            {isIOS ? (
              <img src="images/Rotate.gif" style={{ width: '100%' }} />
            ) : (
              <video preload="auto" autoPlay={true} muted>
                <source src="/videos/Clubhaus.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <div className="about2_content">
            <h2>Here to help you play your cards right.</h2>
            <p>
              <Suspense fallback={<div>Loading...</div>}>
                At ClubHaus, we're not afraid to raise the bar. Our commitment to pushing the boundaries of what's possible has earned us a spot as a leader in the creative sector. Let us help you achieve a straight path of success with your brand, website, and social strategies.
              </Suspense>
            </p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <DownArrow handleClick={props.arrowClick} />
    </div>
  );
}
