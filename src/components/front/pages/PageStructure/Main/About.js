import React, { useState } from 'react';  
import './About.css';
import certificationImg from '../../../../img/about_img/diploma.svg';
import mentorsImg from '../../../../img/about_img/teachers-2.svg';
import controlImg from '../../../../img/about_img/appraisal-form.svg';
import graduatesImg from '../../../../img/about_img/student.svg';
import vector from '../../../../img/about_img/about-v.png'; 
import comput from '../../../../img/about_img/proposal-img.png'; 
import audience from '../../../../img/about_img/audience.png';
import Choice from '../../../Modul_choise/Choice';

const About = () => {
  const [showChoice, setShowChoice] = useState(false);

  const handleOpenChoice = () => {
    setShowChoice(true);
  };

  const handleCloseChoice = () => {
    setShowChoice(false);
  };

  return (
    <section id="about" className="sectionAbout">
      <div className="section-content">
        <div className="context"><h2>ПРО НАС</h2></div>
        <p>Навчальний простір "Vector" — команда молодих амбітних педагогів-практиків, які йдуть у ногу з розвитком ІТ-технологій. Наша мета — не просто навчати діток програмувати, а прищепити їм любов до цього напрямку та навчити їх вчитися, адже ІТ — сфера, в якій потрібно вивчати щось нове весь час.
        Ми працюємо з дітками десятий рік і як ніхто знаємо, що основним рушієм у них є інтерес, а наші педагоги знають і вміють цей процес зробити дійсно захопливим!</p>
        <div className="photo">
        <img src={vector} alt="v-vek" />
      </div>
      </div>
      
      <div className="additional-info">
        <div className="info-container">
          <img src={certificationImg} alt="Сертифікація" />
          <h2>СЕРТИФІКАЦІЯ</h2>
          <p>Ми створили онлайн курси з програмування, які сертифіковані Спілкою автоматизаторів бізнесу та читаються по всій Україні.</p>
        </div>
        <div className="info-container">
          <img src={mentorsImg} alt="5 + Менторів" />
          <h2>5 + МЕНТОРІВ</h2>
          <p>Наша команда налічує п’ять висококваліфікованих менторів-практиків, які вміють і люблять працювати з дітьми. Вони, як ніхто, знають і доведуть вам, що програмування - це не тільки високооплачувана діяльність, а й мега-цікаве заняття.</p>
        </div>
        <div className="info-container">
          <img src={controlImg} alt="Контроль знань" />
          <h2>КОНТРОЛЬ ЗНАНЬ</h2>
          <p>В особистому кабінеті можна спостерігати за успішністю учня. Тести, оцінки та контрольні завдання - усе це показується в кабінеті учня! Батьки завжди будуть в курсі того, як навчається дитина.</p>
        </div>
        <div className="info-container">
          <img src={graduatesImg} alt="1000 + Випускників" />
          <h2>1000 + ВИПУСКНИКІВ</h2>
          <p>За період з 2013 року і до сьогодні у нас вже понад 1000 випускників, більшість з яких обрало ІТ напрям для подальшого навчання в університеті.</p>
        </div>
      </div>

      <div className="ring ring1"></div>
      <div className="ring ring2"></div>
      <div className="ring ring3"></div>

      <div className="bottom-section">
        <span className="vector-text">VECTOR</span>
        <div className="bottom-content">
          <p className="bottom-left">Отож, довіряйте досвіду і професіоналізму!</p>
          <div className="bottom-center">
            <img src={comput} alt="Central" />
          </div>
          <div className="bottom-right">
            <h2>ЗАПИСУЙТЕСЬ</h2>
            <p>НА <span className='text'>БЕЗКОШТОВНИЙ</span> МАЙСТЕР-КЛАС ВЖЕ СЬОГОДНІ</p>
          </div>
        </div>
      </div>

      <div className="video-section">
        <div className="video-left">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/H9YOcrpI8y4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-right">
          <h2>ОТОЖ, ДОВІРЯЙТЕ ДОСВІДУ І ПРОФЕСІОНАЛІЗМУ! ЗАПИСУЙТЕСЬ НА МАЙСТЕР-КЛАС ВЖЕ СЬОГОДНІ.</h2>
          <ul>
            <li>ознайомиться з основними напрямами онлайн курсу і форматом навчання;</li>
            <li>зрозуміє процес і основні принципи програмування (java) або сайтів (web-розробка);</li>
            <li>ознайомиться із завантаженням зображень і роботою з графікою (web-розробка);</li>
            <li>створить свою міні-гру (java) або напише свою першу власну інтернет-сторінку (web-розробка);</li>
            <li>після майстер-класу ментор під'єднається до вашої дитини та в телефонному режимі покаже всі помилки і пояснить чому вони виникли.</li>
          </ul>
          <button className="sign-up-button" onClick={handleOpenChoice}>Записатись</button>
        </div>
      </div>

      <div className="target-audience">
        <div className="target-content">
          <div className="target-left">
            <img src={audience} alt="Для кого" />
          </div>
          <div className="target-right">
          <div className="context"><h2>ДЛЯ ДІТЕЙ ВІКОМ ВІД 12 ДО 18 РОКІВ</h2></div>
            <p>Програми курсів по Java та WEB-розробці розроблені таким чином, що в одній групі можуть навчатись діти різного віку.</p>
          </div>
        </div>
      </div>
      
      <Choice isOpen={showChoice} onClose={handleCloseChoice} />
    </section>
  );
}

export default About;
