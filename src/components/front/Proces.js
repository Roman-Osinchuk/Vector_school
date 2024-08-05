import React from 'react';
import './Proces.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../img/proces_img/p-1.png';
import Image2 from '../img/proces_img/p-2.png';
import Image3 from '../img/proces_img/p-3.png';
import Image4 from '../img/proces_img/p-4.png';
import Image5 from '../img/proces_img/p-5.png';
import Image6 from '../img/proces_img/p-6.png';
import Review1 from '../img/proces_img/ja-master.png';
import Review2 from '../img/proces_img/ja-master.png';
import Review3 from '../img/proces_img/ja-master.png';

const Proces = () => {
  const steps = [
    { number: 1, title: 'Реєстрація', description: 'Обрати курс та зареєструватися на майстер-клас', imgSrc: Image1 },
    { number: 2, title: 'Обрати курс', description: 'Підтвердити бажання навчатися та оплатити', imgSrc: Image2 },
    { number: 3, title: 'Доступ', description: 'Отримати підручник Новою поштою та доступ до навчальних матеріалів електронною поштою', imgSrc: Image3 },
    { number: 4, title: 'Навчання', description: 'Брати участь в онлайн заняттях за розкладом та виконувати домашнє завдання у зручний час', imgSrc: Image4 },
    { number: 5, title: 'Підтримка', description: 'Протягом навчання постійна підтримка для викладача', imgSrc: Image5 },
    { number: 6, title: 'Сертифікат', description: 'Отримання сертифікату після успішного закінчення курсу', imgSrc: Image6 }
  ];

  const reviews = [
    { name: 'Олександр Шурила', text: 'Чудові курси. Син навчається вже третій рік, йому подобається...', imgSrc: Review1 },
    { name: 'Тетяна Гидко', text: 'Син почав займатися 1 рік назад. Робили вибір з декількох навчальних центрів...', imgSrc: Review2 },
    { name: 'Oleg Lavreniuk', text: 'Син учиться более 4-х лет на курсах программирования. Ему очень нравится...', imgSrc: Review3 },
    { name: 'Людмила', text: 'Сьогодні закінчили перший модуль, задоволені. Дівчата - викладачі вкладають душу в свою роботу. Супер . Рекомендую. https://20.ua/khm/obuchenie/kursyi/vektor-navchalniy-prostir.html', imgSrc: Review3 },
  ];

  const reviewSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="proces" className="sectionProces">
      <h1>ЯК ПРОХОДИТЬ ПРОЦЕС НАВЧАННЯ?</h1>
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

      <div className="sectionReviewWrapper">
        <div className="sectionReview">
          <h1>ВІДГУКИ</h1>
          <Slider {...reviewSettings}>
            {reviews.map((review, index) => (
              <div key={index} className="review">
                <div className="review-image-container">
                  <img src={review.imgSrc} alt={review.name} />
                </div>
                <h3>{review.name}</h3>
                <p>{review.text}</p>
              </div>
            ))}
      </Slider>
      </div>
      </div>
    </section>
  );
}

export default Proces;
