import React from 'react';
import './Procesww.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../../../img/proces_img/p-1.png';
import Image2 from '../../../img/proces_img/p-2.png';
import Image3 from '../../../img/proces_img/p-3.png';
import Image4 from '../../../img/proces_img/p-4.png';
import Image5 from '../../../img/proces_img/p-5.png';
import Image6 from '../../../img/proces_img/p-6.png';


const Proces1 = () => {
  const steps = [
    { number: 1, title: 'Реєстрація', description: 'Обрати курс та зареєструватися на майстер-клас', imgSrc: Image1 },
    { number: 2, title: 'Обрати курс', description: 'Підтвердити бажання навчатися та оплатити', imgSrc: Image2 },
    { number: 3, title: 'Доступ', description: 'Отримати підручник Новою поштою та доступ до навчальних матеріалів електронною поштою', imgSrc: Image3 },
    { number: 4, title: 'Навчання', description: 'Брати участь в онлайн заняттях за розкладом та виконувати домашнє завдання у зручний час', imgSrc: Image4 },
    { number: 5, title: 'Підтримка', description: 'Протягом навчання постійна підтримка для викладача', imgSrc: Image5 },
    { number: 6, title: 'Сертифікат', description: 'Отримання сертифікату після успішного закінчення курсу', imgSrc: Image6 }
  ];
  return (
    <section id="proces" className="sectionProces">
      <h2>ЯК ПРОХОДИТЬ ПРОЦЕС НАВЧАННЯ?</h2>
      <div className="steps">
        {steps.map(step => (
          <div key={step.number} className="step">
            <div className="step-number">{step.number}</div>
            <div className="bubble-background">
              <img src={step.imgSrc} alt={step.title} />
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Proces1;
