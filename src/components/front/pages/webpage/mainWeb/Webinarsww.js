import React, { useState } from 'react';
import './Webinarsww.css';
import FrontEndIcon from '../img/modul_img/baby-boy.svg';
import BackEndIcon from '../img/modul_img/boy.svg';
import LaravelIcon from '../img/modul_img/businessman.svg';
import AspNetIcon from '../img/modul_img/gamedev.svg';
import DesignImage from '../img/modul_img/figure.png';
import Discon from '../img/modul_img/discount-icon.png';
import EqualsIcon from '../img/modul_img/equal.svg';
import DotIcon from '../img/modul_img/circle.svg';
import Modal from '../../../Modal_qesion/Modal';

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
      title: "1 МОДУЛЬ",
      name: "Front-end",
      icon: FrontEndIcon,
      details: ["12 занять", "(по 2 години)", "1,5 місяці", "Двічі на тиждень", "2700 грн."]
    },
    {
      id: 2,
      title: "2 МОДУЛЬ",
      name: "Back-end",
      icon: BackEndIcon,
      details: ["12 занять", "(по 2 години)", "1,5 місяці", "Двічі на тиждень", "2700 грн."]
    },
    {
      id: 3,
      title: "3 МОДУЛЬ",
      name: "Laravel",
      icon: LaravelIcon,
      details: ["12 занять", "(по 2 години)", "1,5 місяці", "Двічі на тиждень", "2700 грн."]
    },
    {
      id: 4,
      title: "4 МОДУЛЬ",
      name: "ASP.NET MVC 5",
      icon: AspNetIcon,
      details: ["12 занять (+3 додаткових)", "(по 2 години)", "1,5 місяці", "Двічі на тиждень", "2700 грн."]
    }
  ];

  const discountData = [
    { id: 1, percentage: "-10%", text: "ПРИ ОПЛАТІ ЗА КУРС" },
    { id: 2, percentage: "-20%", text: "ПРИ ОПЛАТІ ЗА 2-Й КУРС" },
    { id: 3, percentage: "-5%", text: "ПРИВЕДИ ДРУГА" }
  ];

  return (
    <section id="course-structure" className="course-structure">
      <h2>КУРС WEB-РОЗРОБКИ ДЛЯ ШКОЛЯРІВ</h2>
      <h3>ДЛЯ ДІТЕЙ ВІКОМ 12-18 РОКІВ</h3>
      <p>Кожен модуль – це окремий блок, який є фундаментом для наступних модулів. Результатом кожного є повноцінні програми.</p>

      <div className="design-image-container">
        <img src={DesignImage} alt="Design Element" className="design-image" />
      </div>

            <div className="modules-container">
        {moduleData.map((module, index) => (
          <div key={module.id} className="module">
            <div className="module-header">
              <span className="module-title">{module.name}</span>
              <span className="module-number">{index + 1} модуль</span>
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
          <strong>1 КУРС</strong>
        </div>
        <div className="summary-item">
          <img src={EqualsIcon} alt="=" className="icon equals-icon" />
          <strong>4 МОДУЛЯ</strong>
        </div>
        <div className="summary-item">
          <img src={DotIcon} alt="dot" className="icon dot-icon" />
          <strong>48 ЗАНЯТЬ</strong>
        </div>
        <div className="summary-item">
          <img src={DotIcon} alt="dot" className="icon dot-icon" />
          <strong>96 ГОДИН</strong>
        </div>
      </div>

      <div className="schedule">
        <h3>СТАРТ ПЕРШОГО МОДУЛЯ: FRONT-END</h3>
        <p>ОБИРАЙТЕ ЗРУЧНИЙ ЧАС САМЕ ДЛЯ ВАС</p>
        <div className="module-card">
          <div className="module-date">
            20.02.2024
          </div>
          <div className="module-schedule">
            <h3>Розклад</h3>
            <p>Вівторок 16:30–18:30</p>
            <p>Четвер 16:30–18:30</p>
            <button className="pay-button" onClick={toggleModal2}>Оплатити</button>
          </div>
        </div>
      </div>

      <div className="discounts">
        <h3>ЗНИЖКИ</h3>
        <p>РІЗНІ ВИДИ ЗНИЖОК НЕ СУМУЮТЬСЯ. ПРАЦЮЄ ТА, ЯКА БІЛЬША</p>
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
        <p>ЗАЛИШИЛИСЬ ПИТАННЯ?<br />НАПИШІТЬ НАМ ТА ОТРИМАЙТЕ КОНСУЛТАЦІЮ</p>
        <button onClick={toggleModal} className="previous-buttn">Написати</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal} text={"Виникло питання?"}/>
      <Modal isOpen={isModal2Open} onClose={toggleModal2}text={"Замовити модуль"} />
    </section>
  );
};

export default Webinars;
