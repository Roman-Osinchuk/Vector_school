import React, { useState, useEffect } from 'react';
import '../Main/Header.css';
import logo from '../../img/header_img/logo.png';
import phoneIcon from '../../img/header_img/phone-call.svg';
import extraIcon1 from '../../img/header_img/mesenger-2.svg';
import extraIcon2 from '../../img/header_img/viber-1.svg';
import Modal from './ModalEn'; 

const HeaderEn = () => {
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
          <b>It's time to master a relevant profession</b> <br />
          that will ensure a stable and successful future for your child!
        </p>
        <button className="learn-more-btn" onClick={handleLearnMoreClick}>Learn More</button>
      </div>

      <div className="education-footer">
        <p>EDUCATION WITH THE VECTOR LEARNING SPACE IS THE RIGHT CHOICE AND EXCELLENT RESULT!</p>
      </div>
    </header>
  );
}

export default HeaderEn;
