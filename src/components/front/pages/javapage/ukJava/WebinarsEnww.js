import React, { useState } from 'react';
import '../../webpage/mainWeb/Webinarsww.css';
import FrontEndIcon from '../img/modul_img/baby-boy.svg';
import BackEndIcon from '../img/modul_img/boy.svg';
import LaravelIcon from '../img/modul_img/businessman.svg';
import AspNetIcon from '../img/modul_img/gamedev.svg';
import DesignImage from '../img/modul_img/figure.png';
import Discon from '../img/modul_img/discount-icon.png';
import EqualsIcon from '../img/modul_img/equal.svg';
import DotIcon from '../img/modul_img/circle.svg';
import Modal from '../../../modul_page/ModalEnpage';
import { courseStartDates } from '../../../Data_course/dateUtils';

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
      title: "MODULE 1",
      name: "Basic",
      icon: FrontEndIcon,
      details: ["12 classes", "(2 hours each)", "1.5 months", "Twice a week", "2700 UAH"]
    },
    {
      id: 2,
      title: "MODULE 2",
      name: "Hacker",
      icon: BackEndIcon,
      details: ["12 classes", "(2 hours each)", "1.5 months", "Twice a week", "2700 UAH"]
    },
    {
      id: 3,
      title: "MODULE 3",
      name: "Young Entrepreneur",
      icon: LaravelIcon,
      details: ["12 classes", "(2 hours each)", "1.5 months", "Twice a week", "2700 UAH"]
    },
    {
      id: 4,
      title: "MODULE 4",
      name: "Game Dev",
      icon: AspNetIcon,
      details: ["12 classes", "(2 hours each)", "1.5 months", "Twice a week", "2700 UAH"]
    }
  ];

  const discountData = [
    { id: 1, percentage: "-10%", text: "WHEN PAYING FOR THE COURSE" },
    { id: 2, percentage: "-20%", text: "WHEN PAYING FOR 2 COURSES" },
    { id: 3, percentage: "-5%", text: "BRING A FRIEND" }
  ];

  return (
    <section id="course-structure" className="course-structure">
      <h2>Java Online Course</h2>
      <h3>for children aged 12-18</h3>
      <p>Online classes for children from 12 years old</p>

      <div className="design-image-container">
        <img src={DesignImage} alt="Design Element" className="design-image" />
      </div>

      <div className="modules-container">
        {moduleData.map((module, index) => (
          <div key={module.id} className="module">
            <div className="module-header">
              <span className="module-title">{module.name}</span>
              <span className="module-number">{index + 1} Module</span>
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
          <strong>48 CLASSES</strong>
        </div>
        <div className="summary-item">
          <img src={DotIcon} alt="dot" className="icon dot-icon" />
          <strong>96 HOURS</strong>
        </div>
      </div>

      <div className="schedule">
        <h3>Start of the first module: Basic</h3>
        <p>Choose a convenient time for you</p>
        <div className="module-card">
          <div className="module-date">
          {courseStartDates.java}
          </div>
          <div className="module-schedule">
            <h3>Schedule</h3>
            <p>Monday 16:30–18:30</p>
            <p>Saturday 16:30–18:30</p>
            <button className="pay-button" onClick={toggleModal2}>Pay</button>
          </div>
        </div>
      </div>

      <div className="discounts">
        <h3>DISCOUNTS</h3>
        <p>DIFFERENT TYPES OF DISCOUNTS DO NOT COMBINE. ONLY THE LARGER ONE APPLIES</p>
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
      <Modal isOpen={isModal2Open} onClose={toggleModal2} text={"Order module"} />
    </section>
  );
};

export default Webinars;
