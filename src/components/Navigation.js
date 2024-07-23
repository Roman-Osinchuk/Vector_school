import React, { useState, useEffect } from 'react';
import './Navigation.css';
import logo from './img/header_img/logo.png';
import phoneIcon from './img/header_img/phone-call.svg';
import extraIcon1 from './img/header_img/mesenger-2.svg';
import extraIcon2 from './img/header_img/viber-1.svg';
import Modal from './Modal';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const toggleMenu = () => {
    if (isScrolled) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > 50) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${isMenuOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={toggleMenu}>ПРО НАС</a></li>
        <li><a href="#course" onClick={toggleMenu}>КУРСИ</a></li>
        <li><a href="#proces" onClick={toggleMenu}>ПРОЦЕС НАВЧАННЯ</a></li>
        <li><a href="#webinars" onClick={toggleMenu}>ВЕБІНАРИ</a></li>
        <li><a href="#contacts" onClick={toggleMenu}>КОНТАКТИ</a></li>
      </ul>
      <a href="tel:+380673825500" className="phone-number-link">
        <div className="contact-number">
          <div className="phone-icon-container">
            <img src={phoneIcon} alt="Phone Icon" className="phone-icon" />
            <p>+380673825500</p>
          </div>
        </div>
      </a>
      <div className="extra-info">
        <p onClick={toggleModal}>НАПИСАТИ</p>
      </div>
      <div className={`burger-menu ${isMenuOpen ? 'open' : ''} ${isScrolled ? '' : 'disabled'}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className='extr-socia'>
        <div className="container">
          <a href="http://m.me/vector.km.ua" target="_blank" rel="noopener noreferrer">
            <img src={extraIcon1} alt="Extra Icon 1" className="extra-icon" />
          </a>
        </div>
        <div className="container">
          <a href="viber://chat?number=+380672938092" target="_blank" rel="noopener noreferrer">
            <img src={extraIcon2} alt="Extra Icon 2" className="extra-icon" />
          </a>
        </div>
      </div>
      <div className="language-switch">
        <p><b>UA</b> UK</p>
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
      {showScrollTopButton && (
        <button className="scroll-top-button" onClick={scrollToTop}>↑</button>
      )}
    </nav>
  );
}

export default Navigation;
