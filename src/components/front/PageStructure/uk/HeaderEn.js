import React, { useState, useEffect } from 'react';
import '../Main/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
        <h2>ONLINE EDUCATION</h2>
        <p className="education-text">
          Programming is a profession unaffected by quarantine. <br />
          <b>It's time to master a relevant profession,</b> <br />
          which will ensure a stable and successful future for your child!
        </p>
        <button className="learn-more-btn" onClick={handleLearnMoreClick}>Learn More</button>
      </div>

      <div className="education-footer">
        <p>Education with VECTOR learning space is the right choice and excellent results!</p>
      </div>
    </header>
  );
}

export default Header;
