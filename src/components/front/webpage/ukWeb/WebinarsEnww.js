import React, { useState } from 'react';
import '../mainWeb/Webinarsww.css';
import FrontEndIcon from '../img/modul_img/baby-boy.svg';
import BackEndIcon from '../img/modul_img/boy.svg';
import LaravelIcon from '../img/modul_img/businessman.svg';
import AspNetIcon from '../img/modul_img/gamedev.svg';
import DesignImage from '../img/modul_img/figure.png';
import Discon from '../img/modul_img/discount-icon.png';
import EqualsIcon from '../img/modul_img/equal.svg';
import DotIcon from '../img/modul_img/circle.svg';
import Modal from '../ukWeb/ModalEnwUA';

const Webinars = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleModal2 = () => {
    setIsModal2Open(!isModal2Open);
  };

  const moduleData = [
    {
      id: 1,
      title: "Module 1",
      name: "Front-end",
      icon: FrontEndIcon,
      details: ["12 lessons", "(2 hours each)", "1.5 months", "Twice a week", "2700 UAH"]
    },
    {
      id: 2,
      title: "Module 2",
      name: "Back-end",
      icon: BackEndIcon,
      details: ["12 lessons", "(2 hours each)", "1.5 months", "Twice a week", "2700 UAH"]
    },
    {
      id: 3,
      title: "Module 3",
      name: "Laravel",
      icon: LaravelIcon,
      details: ["12 lessons", "(2 hours each)", "1.5 months", "Twice a week", "2700 UAH"]
    },
    {
      id: 4,
      title: "Module 4",
      name: "ASP.NET MVC 5",
      icon: AspNetIcon,
      details: ["12 lessons (+3 additional)", "(2 hours each)", "1.5 months", "Twice a week", "2700 UAH"]
    }
  ];

  const discountData = [
    { id: 1, percentage: "-10%", text: "WHEN PAYING FOR THE COURSE" },
    { id: 2, percentage: "-20%", text: "WHEN PAYING FOR 2 COURSES" },
    { id: 3, percentage: "-5%", text: "REFER A FRIEND" }
  ];

  return (
    <section id="course-structure" className="course-structure">
      <h2>WEB DEVELOPMENT COURSE FOR STUDENTS</h2>
      <h3>FOR CHILDREN AGED 12-18</h3>
      <p>Each module is a separate block, which serves as a foundation for the subsequent modules. The result of each is a complete program.</p>

      <div className="design-image-container">
        <img src={DesignImage} alt="Design Element" className="design-image" />
      </div>

      <div className="modules-container">
        {moduleData.map((module, index) => (
          <div key={module.id} className="module">
            <div className="module-header">
              <span className="module-title">{module.name}</span>
              <span className="module-number">Module {index + 1}</span>
            </div>
            <div className="module-icon">
              <img src={module.icon} alt={module.name} />
            </div>
            <div className="module-details">
              <p className='bol'>{module.details[0]}</p>
              <p>{module.details[1]}</p>
              <p className='bol'>{module.details[2]}</p>
              <p>{module.details[3]}</p>
              <p className="price">{module.details[4]}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="design-image-container flipped">
        <img src={DesignImage} alt="Design Element" className="design-image" />
      </div>

      <div className="summary">
        <div className="summary-item">
          <strong>1 COURSE</strong>
        </div>
        <div className="summary-item">
          <img src={EqualsIcon} alt="=" className="icon equals-icon" />
          <strong>4 MODULES</strong>
        </div>
        <div className="summary-item">
          <img src={DotIcon} alt="dot" className="icon dot-icon" />
          <strong>48 LESSONS</strong>
        </div>
        <div className="summary-item">
          <img src={DotIcon} alt="dot" className="icon dot-icon" />
          <strong>96 HOURS</strong>
        </div>
      </div>

      <div className="schedule">
        <h3>START OF THE FIRST MODULE: FRONT-END</h3>
        <p>CHOOSE A CONVENIENT TIME FOR YOU</p>
        <div className="module-card">
          <div className="module-date">
            20.02.2024
          </div>
          <div className="module-schedule">
            <h3>Schedule</h3>
            <p>Tuesday 16:30–18:30</p>
            <p>Thursday 16:30–18:30</p>
            <button className="pay-button" onClick={toggleModal2}>Pay</button>
          </div>
        </div>
      </div>

      <div className="discounts">
        <h3>DISCOUNTS</h3>
        <p>DISCOUNTS DO NOT COMBINE. THE LARGER ONE APPLIES</p>
        <div className="discounts-container">
          {discountData.map(discount => (
            <div key={discount.id} className="discount-item">
              <img src={Discon} alt="Discount" />
              <div className="discount-percentage">{discount.percentage}</div>
              <p>{discount.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="next-quesh">
        <p>HAVE QUESTIONS?<br />WRITE TO US AND GET A CONSULTATION</p>
        <button onClick={toggleModal} className="previous-buttn">Write</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal} text={"Have a question?"}/>
      <Modal isOpen={isModal2Open} onClose={toggleModal2} text={"Order Module"} />
    </section>
  );
};

export default Webinars;
