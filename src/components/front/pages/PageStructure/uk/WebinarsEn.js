import React, { useState } from 'react';
import '../Main/Webinars.css';
import JavaImage from '../../../../img/webinars_img/webinar-first.png';  
import WebDevImage from '../../../../img/webinars_img/webinar.png'; 
import Modal from '../../../modul_page/ModalEnpage';
import Modalq from '../../../modul_page/ModalEnpage';

const Webinars = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal1Open, setIsModal1Open] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleModal1 = () => {
    setIsModal1Open(!isModal1Open);
  };

  return (
    <section id="webinar" className="sectionWebinars">
      <h2>OUR WEBINARS</h2>
      <div className="webinar-container">
        <div className="webinar-card">
          <div className="webinar-date">2-02-2024</div>
          <img src={JavaImage} alt="Java Webinar" />
          <h2>JAVA WEBINAR</h2>
          <ul>
            <li>Get acquainted with the main areas of the online course and the learning format;</li>
            <li>Understand the process and basic principles of game creation;</li>
            <li>Get familiar with image loading and graphics work;</li>
            <li>Create your mini-game;</li>
            <li>After the workshop, a mentor will contact your child by phone to show all the mistakes and explain why they occurred.</li>
          </ul>
          <button onClick={toggleModal} className="sign-up-button">Sign Up</button>
        </div>
        <div className="webinar-card">
          <div className="webinar-date">9-02-2024</div>
          <img src={WebDevImage} alt="Web Development Webinar" />
          <h2>WEB DEVELOPMENT WEBINAR</h2>
          <ul>
            <li>Get acquainted with the main areas of the online course and the learning format;</li>
            <li>Understand the process and basic principles of website creation;</li>
            <li>Get familiar with image loading and block-based layout;</li>
            <li>Write your first own web page;</li>
            <li>After the workshop, a mentor will contact your child by phone to show all the mistakes and explain why they occurred.</li>
          </ul>
          <button onClick={toggleModal} className="sign-up-button">Sign Up</button>
        </div>
      </div>
      <div className="next-webinar">
        <p>CAN'T MAKE IT ON THIS DAY AND TIME?<br /> <span className='tex'>SIGN UP</span> FOR THE NEXT MASTER CLASS!</p>
        <button onClick={toggleModal} className="previous-button">Call Me Back</button>
      </div>
      <div className="next-quesh">
        <p>HAVE QUESTIONS?<br /> WRITE TO US AND GET A CONSULTATION</p>
        <button onClick={toggleModal1} className="previous-buttn">Write</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal} text={"Got questions?"} />
      <Modalq isOpen={isModal1Open} onClose={toggleModal1} text={"Fill out the form"} />
    </section>
  );
}

export default Webinars;
