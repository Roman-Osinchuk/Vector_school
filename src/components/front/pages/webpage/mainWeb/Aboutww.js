import React, { useState } from 'react';  
import '../mainWeb/Aboutww.css';
import certificationImg from '../img/header_img/web-design.svg';
import mentorsImg from '../img/header_img/web-development.svg';
import controlImg from '../img/header_img/rocket.svg';
import graduatesImg from '../img/header_img/teleworking.svg';
import vector from '../../../../img/about_img/about-v.png'; 
import comput from '../../../../img/about_img/proposal-img.png'; 
import audience from '../../../../img/about_img/audience.png';
import Choice from '../../../Modul_choise/Choice';
import jamaster from '../img/header_img/ja-master.png'

const AboutWEB1 = () => {
  const [showChoice, setShowChoice] = useState(false);

  const handleOpenChoice = () => {
    setShowChoice(true);
  };

  const handleCloseChoice = () => {
    setShowChoice(false);
  };

  return (
    <section id="about" className="sectionAbout">
      <div className="section-content1">
  <div className="text-container1">
    <div className="context1">
      <h2>Чому WEB-розробка?</h2>
    </div>
    <p>У наш час стрімко розвивається Інтернет-платформа, а саме: вебпрограмування. Усі сайти, з якими Ви щодня маєте справу, створені саме завдяки вебтехнологіям. Професія даного напрямку є досить затребуваною та високооплачуваною, але і взамін вимагає неабияких зусиль, а саме: навчання, практики, розвиток логіки та фантазії. Тому дуже важливо з малого віку надати той самий фундамент своїй дитині, аби вона розвивала свій інтерес, навик і ставала з кожним днем успішнішою.</p>
  </div>
  <div className="photo1">
    <img src={vector} alt="v-vek" />
  </div>
</div>


<div className="additional-info1">
        <div className="info-container1">
          <img src={certificationImg} alt="Сертифікація" />
          <h2>Актуальність</h2>
          <p>Створення сайтів стає все більш і більш популярним напрямком програмування, так як великий ринок праці переходить на онлайн-платформу та якісний сайт є невід’ємною частиною багатьох напрямків.</p>
        </div>
        <div className="info-container1">
          <img src={mentorsImg} alt="5 + Менторів" />
          <h2>Простота</h2>
          <p>Для створення сайтів існує безліч бібліотек, фреймворків, CMS, середовищ розробки, які помітно спрощують роботу вебпрограміста.</p>
        </div>
        <div className="info-container1">
          <img src={controlImg} alt="Контроль знань" />
          <h2>Розвиток</h2>
          <p>Постійні оновлення значно розширюють можливості веброзробника та збільшують продуктивність сайтів.</p>
        </div>
        <div className="info-container1">
          <img src={graduatesImg} alt="1000 + Випускників" />
          <h2>Конкурентність</h2>
          <p>Фахівці у цій сфері завжди затребувані на ринку праці!</p>
        </div>
      </div>
      
      <div className="bottom-section1">
        <span className="vector-text1">VECTOR</span>
        <div className="bottom-content1">
          <p className="bottom-left1">Отож, довіряйте досвіду і професіоналізму!</p>
          <div className="bottom-center1">
            <img src={comput} alt="Central" />
          </div>
          <div className="bottom-right1">
            <h2>ЗАПИСУЙТЕСЬ</h2>
            <p>НА <span className='text1'>БЕЗКОШТОВНИЙ</span> МАЙСТЕР-КЛАС ВЖЕ СЬОГОДНІ</p>
          </div>
        </div>
      </div>

      <div className="video-section1">
        <div className="video-left1">
        <img src={jamaster} alt="Central1" />
        </div>
        <div className="video-right1">
          <h2>На майстер-класі дитина навчиться:</h2>
          <ul>
            <li>ознайомиться з основними напрямами онлайн курсу та форматом навчання;</li>
            <li>зрозуміє процес та основні принципи створення сайтів;</li>
            <li>ознайомиться із завантаженням зображень та блочною версткою;</li>
            <li>напише свою першу власну інтернет-сторінку;</li>
            <li>після майстер-класу ментор підключиться до вашої дитини та у телефонному режимі покаже всі помилки та пояснить чому вони виникли.</li>
          </ul>
          <button className="sign-up-button1" onClick={handleOpenChoice}>Зареєструватись</button>
        </div>
      </div>
      <div className="web-dev-for-school">
  <div className="text-content">
    <h3>WEB-РОЗРОБКА</h3>
    <h4>ДЛЯ ШКОЛЯРІВ</h4>
    <div className="text-content">
      <div className="text-wrapper">
        <div className="left-bar"></div>
        <p>Ми намагались побудувати наш курс, щоб він містив достатньо теорії та максимум практики. В основному, це вивчення різних елементів сайту, його адаптивність та безпосередньо функціональність, розробка чату, створення власного блогу за допомогою відомого фреймворку, а також розробка інтернет-магазину на популярній платформі.</p>
      </div>
    </div>
  </div>
</div>


      <Choice isOpen={showChoice} onClose={handleCloseChoice} />
    </section>
  );
}

export default AboutWEB1;
