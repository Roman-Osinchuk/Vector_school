import React, { useEffect } from 'react';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLearnMoreClick = () => {
    window.scrollBy({ top: 3000, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="online-education">
        <h2>ОНЛАЙН ОСВІТА</h2>
        <p className="education-text">
          Програміст — професія непідвладна карантину. <br />
          <b>Час освоювати актуальну професію,</b> <br />
          яка подбає про стабільне успішне майбутнє вашої дитини!
        </p>
        <button className="learn-more-btn" onClick={handleLearnMoreClick}>Дізнатись більше</button>
      </div>

      <div className="education-footer">
        <p>Освіта разом із навчальним простором VECTOR — це правильний вибір та відмінний результат!</p>
      </div>
    </header>
  );
}

export default Header;
