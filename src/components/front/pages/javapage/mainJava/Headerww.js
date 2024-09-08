import React, { useEffect } from 'react';
import '../../webpage/mainWeb/Headerww.css';

const HeaderWEB1 = () => {
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
        <h2>Java для школярів</h2>
        <p className="education-text1">
        ОНЛАЙН - освіта для школярів <br /> у навчальному просторі Vector
        </p>
        <button className="learn-more-btn1" onClick={handleLearnMoreClick}>Дізнатись більше</button>
      </div>
    </header>
  );
};

export default HeaderWEB1;
