import React, { useState } from 'react';
import '../Main/Webinars.css';
import JavaImage from '../../img/webinars_img/webinar-first.png';  
import WebDevImage from '../../img/webinars_img/webinar.png'; 
import Modal from '../uk/ModalEn';
import Zapis from '../uk/ZapisEn';

const Webinars = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isZapisOpen, setIsZapisOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleZapis = () => {
    setIsZapisOpen(!isZapisOpen);
  };

  return (
    <section id="webinar" className="sectionWebinars">
      <h1>OUR WEBINARS</h1>
      <div className="webinar-container">
        <div className="webinar-card">
          <div className="webinar-date">2-2-2024</div>
          <img src={JavaImage} alt="Java Webinar" />
          <h2>JAVA WEBINAR</h2>
          <ul>
            <li>Get acquainted with the main topics of the online course and the learning format;</li>
            <li>Understand the process and basic principles of game creation;</li>
            <li>Learn about image loading and working with graphics;</li>
            <li>Create your own mini-game;</li>
            <li>After the workshop, a mentor will contact your child by phone to review all errors and explain why they occurred.</li>
          </ul>
          <button onClick={toggleZapis} className="sign-up-button">Sign Up</button>
        </div>
        <div className="webinar-card">
          <div className="webinar-date">9-2-2024</div>
          <img src={WebDevImage} alt="Web Development Webinar" />
          <h2>WEB DEVELOPMENT WEBINAR</h2>
          <ul>
            <li>Get acquainted with the main topics of the online course and the learning format;</li>
            <li>Understand the process and basic principles of website creation;</li>
            <li>Learn about image loading and block-based layout;</li>
            <li>Create your own first web page;</li>
            <li>After the workshop, a mentor will contact your child by phone to review all errors and explain why they occurred.</li>
          </ul>
          <button onClick={toggleZapis} className="sign-up-button">Sign Up</button>
        </div>
      </div>
      <div className="next-webinar">
        <p>UNABLE TO ATTEND AT THIS DATE AND TIME?<br /> <span className='tex'>SIGN UP</span> FOR THE NEXT MASTER CLASS!</p>
        <button onClick={toggleZapis} className="previous-button">Call Me Back</button>
      </div>
      <div className="next-quesh">
        <p>HAVE QUESTIONS?<br /> WRITE TO US AND GET A CONSULTATION</p>
        <button onClick={toggleModal} className="previous-buttn">Write Us</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
      <Zapis isOpen={isZapisOpen} onClose={toggleZapis} />
    </section>
  );
}

export default Webinars;
