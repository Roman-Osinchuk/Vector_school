import React, { useState } from 'react';  
import '../../webpage/mainWeb/Aboutww.css';
import certificationImg from '../img/header_img/programming.svg';
import mentorsImg from '../img/header_img/programmer.svg';
import controlImg from '../img/header_img/mobile.svg';
import graduatesImg from '../img/header_img/wallet.svg';
import vector from '../../../front/javapage/img/header_img/java-page.png'; 
import comput from '../../../img/about_img/proposal-img.png'; 
import audience from '../../../img/about_img/audience.png';
import Choice from '../../PageStructure/Main/Choice';
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
      <h2>Чому java?</h2>
    </div>
    <p>Від моменту появи 1995 року, від початку глобальної комп’ютеризації і до сьогодні — мова програмування Java стабільно має попит на ринку. Java – кросплатформенна, з відкритим кодом, безкоштовна. Постійно продовжує активно розвиватися, регулярно виходять оновлення, проте актуальним залишається і старий код, тому немає потреби пристосовуватися до чогось кардинально нового. Стосовно працевлаштування, то дана мова програмування перевершить усі показники у порівнянні з іншими мовами. Будь-який програміст або тестувальник спроможний отримати тонну вакансій і подальшу роботу, вивчаючи мову програмування Java.</p>
  </div>
  <div className="photo1">
    <img src={vector} alt="v-vek" />
  </div>
</div>


<div className="additional-info1">
        <div className="info-container1">
          <img src={certificationImg} alt="Сертифікація" />
          <h2>Популярність</h2>
          <p>Мову програмування java використовують 15,4% програмістів (за рейтингом DOU)</p>
        </div>
        <div className="info-container1">
          <img src={mentorsImg} alt="5 + Менторів" />
          <h2>Легкість</h2>
          <p>Java легко дається новачкам, що в подальшому дасть можливість з легкістю засвоїти додатково інші мови програмування</p>
        </div>
        <div className="info-container1">
          <img src={controlImg} alt="Контроль знань" />
          <h2>Сучасність</h2>
          <p>На мові java пишуться круті додатки для android</p>
        </div>
        <div className="info-container1">
          <img src={graduatesImg} alt="1000 + Випускників" />
          <h2>Висока зарплата</h2>
          <p>Зарплата програмістів java стартує від 600 $ для новачків</p>
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
            <li>дізнається як працює і застосовується генератор випадкових чисел Random;</li>
            <li>ознайомиться з синтаксисом мови java;</li>
            <li>створить свою міні-гру;</li>
            <li>після майстер-класу ментор під'єднається до вашої дитини та у телефонному режимі покаже всі помилки та пояснить чому вони виникли.</li>
          </ul>
          <button className="sign-up-button1" onClick={handleOpenChoice}>Зареєструватись</button>
        </div>
      </div>
      <div className="web-dev-for-school">
  <div className="text-content">
    <h3>Основи програмування</h3>
    <h4>Мовою java для школярів</h4>
    <div className="text-content">
      <div className="text-wrapper">
        <div className="left-bar"></div>
        <p>Більшість дітей ще не усвідомлюють важливість навчання і отриманих знань для їхнього майбутнього, зокрема, майбутньої професії. Основний чинник розвитку дітей - інтерес. Тому ми намагались наш курс побудувати на практичних прикладах, які викликатимуть у школярів зацікавленість, прагнення спробувати пропрацювати самим. В основному, це розробка ігор, робота з графікою, різноманітні "шкідливі" додатки типу вірусів та блокувальників (саме те, що дуже до вподоби школярам). Ну хто ж не мріє заблокувати комп'ютер у шкільній аудиторії?</p>
      </div>
    </div>
  </div>
</div>


      <Choice isOpen={showChoice} onClose={handleCloseChoice} />
    </section>
  );
}

export default AboutWEB1;
