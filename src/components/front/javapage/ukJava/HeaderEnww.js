import React, { useState, useEffect } from 'react';
import '../../webpage/mainWeb/Headerww.css';

const HeaderEnWEB1 = () => {
  useEffect(() => {
    const handleScroll = () => {
      
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLearnMoreClick = () => {
    window.scrollBy({ top: 2500, behavior: 'smooth' });
  };

  return (
    <header className="header1">
      <div className="online-education1">
      <h2>Java for Schoolchildren</h2>
        <p className="education-text1">
          ONLINE - education for schoolchildren <br /> in the Vector learning space
        </p>
        <button className="learn-more-btn1" onClick={handleLearnMoreClick}>Learn More</button>
      </div>
    </header>
  );
};

export default HeaderEnWEB1;
