import React, { useState } from 'react';
import './Webinars.css';
import JavaImage from '../../img/webinars_img/webinar-first.png';  
import WebDevImage from '../../img/webinars_img/webinar.png'; 
import Modal from './Modal';
import Zapis from './Zapis';

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
      <h1>НАШІ ВЕБІНАРИ</h1>
      <div className="webinar-container">
        <div className="webinar-card">
          <div className="webinar-date">2-2-2024</div>
          <img src={JavaImage} alt="Java Webinar" />
          <h2>ВЕБІНАР JAVA</h2>
          <ul>
            <li>ознайомиться з основними напрямками онлайн курсу та форматом навчання;</li>
            <li>зрозуміє процес та основні принципи створення ігор;</li>
            <li>ознайомиться із завантаженням зображень та роботою з графікою;</li>
            <li>створить свою міні-гру;</li>
            <li>після майстер-класу ментор підключиться до вашої дитини та у телефонному режимі покаже всі помилки та пояснить чому вони виникли.</li>
          </ul>
          <button onClick={toggleZapis} className="sign-up-button">Записатись</button>
        </div>
        <div className="webinar-card">
          <div className="webinar-date">9-2-2024</div>
          <img src={WebDevImage} alt="Web Development Webinar" />
          <h2>ВЕБІНАР ПО ВЕБРОЗРОБЦІ</h2>
          <ul>
            <li>ознайомиться з основними напрямками онлайн курсу та форматом навчання;</li>
            <li>зрозуміє процес та основні принципи створення сайтів;</li>
            <li>ознайомиться із завантаженням зображень та блоковою версткою;</li>
            <li>напише свою першу власну інтернет-сторінку;</li>
            <li>після майстер-класу ментор підключиться до вашої дитини та у телефонному режимі покаже всі помилки та пояснить чому вони виникли.</li>
          </ul>
          <button onClick={toggleZapis} className="sign-up-button">Записатись</button>
        </div>
      </div>
      <div className="next-webinar">
        <p>НЕ ВИХОДИТЬ У ЦЕЙ ДЕНЬ І ЧАС?<br /> <span className='tex'>ЗАПИШИСЬ</span> НА НАСТУПНИЙ МАСТЕР-КЛАС!</p>
        <button onClick={toggleZapis} className="previous-button">Передзвоніть мені</button>
      </div>
      <div className="next-quesh">
        <p>ЗАЛИШИЛИСЬ ПИТАННЯ?<br /> НАПИШІТЬ НАМ ТА ОТРИМАЙТЕ КОНСУЛЬТАЦІЮ</p>
        <button onClick={toggleModal} className="previous-buttn">Написати</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
      <Zapis isOpen={isZapisOpen} onClose={toggleZapis} />
    </section>
  );
}

export default Webinars;