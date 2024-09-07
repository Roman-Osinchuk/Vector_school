import React from 'react';
import './Course.css';
import courseImage from '../../../img/course_img/java-bg.png'; 
import javaImage from '../../../img/course_img/java-img.png'; 
import coursImage from '../../../img/course_img/p-4.png'; 
import webImage from '../../../img/course_img/web.png'; 

const Course = ({ onWebPageClick, onJavaPageClick }) => {
  return (
    <section id="course" className="sectionCourse">
      <div className="course-container">
        <div className="course-header">
          <div className="course-title">
            <img src={courseImage} alt="Course" />
            <div>
              <h2>ОСНОВИ ПРОГРАМУВАННЯ<br /> МОВОЮ JAVA ДЛЯ ШКОЛЯРІВ</h2>
              <p>Дата старту <span className="start-date">16-02-2024</span></p>
            </div>
          </div>
          <img src={javaImage} alt="Java" className="java-image" />
        </div>
        <div className="course-content">
          <div className="course-info">
            <h3>Після навчання діти будуть вміти</h3>
            <ul>
              <li>налагодити системний блок комп’ютера (встановлення драйверів для роботи з мовою програмування Java);</li>
              <li>розв'язувати задачі на Java;</li>
              <li>використовувати синтаксис Java;</li>
              <li>розробляти ігри та проекти, застосовуючи алгоритмізацію та програмування;</li>
              <li>створювати структури даних з класами та методами;</li>
              <li>встановлювати програмне забезпечення для ігор та проектів, використовуючи Java ігровий движок;</li>
              <li>розробляти та застосовувати різні Web компоненти (HTML, CSS);</li>
              <li>використовувати базові поняття інтернет-протоколів (HTTP);</li>
              <li>оптимізувати свої програми для роботи у браузері;</li>
              <li>налагоджувати роботу між клієнтськими і серверними частинами проектів.</li>
            </ul>
          </div>
          <div className="course-description">
            <h3>Про курс</h3>
            <p>Більшість дітей ще не усвідомлюють важливість навчання і отримання знань. Але володіючи мобільного, вони розуміють, майбутньої роботи. Основною метою є розвиток дітей - Інтернет. Тому ми намагаємося наш курс побудувати на практичних прикладах, над виготовляючи учнями справжні ігрові проекти, які сподобаються програмувати самим. В основному, це розробки ігор, робота з графікою, різноманітні (таке, що вже давно не розробляли школярів). Не хоче не лише завантажити комп'ютер у шкільній аудиторії?</p>
          </div>
        </div>
        <div className="course-footer">
          <p><strong>ПОСПІШАЙТЕ</strong><br />Старт нового курсу через <span className="days-left">0 днів</span></p>
          <button className="course-button" onClick={onJavaPageClick}>Детальніше</button>
        </div>
      </div>

      <div className="course-container">
        <div className="course-header">
          <div className="course-title">
            <img src={webImage} alt="Course" />
            <div>
              <h2>WEB-РОЗРОБКА ДЛЯ ШКОЛЯРІВ</h2>
              <p>Дата старту <span className="start-date">9-02-2024</span></p>
            </div>
          </div>
          <img src={coursImage} alt="Java" className="java-image" />
        </div>
        <div className="course-content">
          <div className="course-info">
            <h3>Після навчання діти будуть вміти</h3>
            <ul>
              <li>HTML, CSS, стилізація текстів, векторна графіка, анімаційні ефекти в CSS, Bootstrap, JavaScript, JQuery, AJAX, JQuery UI.</li>
              <li>MySQL, PHP, Web-forms, керуючі конструкції, «клієнт-сервер», Session, Regular Expression, міні-меседжер, хостинг.</li>
              <li>Фреймворк Laravel, роутинг, міграції, blade-шаблони, MVC, CRUD, пагінація, Laravel Collective Form, аутентифікація, GitHub.</li>
              <li>ASP.NET MVC 5, C#, Entity Framework, AJAX-форми, інтернет-магазин, корзина для товарів, CodeFirst, фільтри, віджети, валідація, Bitbucket.</li>
            </ul>
          </div>
          <div className="course-description">
            <h3>Про курс</h3>
            <p>Веброзробка є не просто професією, яка потребує багато навчання, практики, зусиль та терпіння, це також задоволення від результату, натхнення та креативність. На цьому курсі учні навчаться розробляти веб-додатки, пізнають нові технології та створять власний інтернет-проект. Додатково розглянемо різноманітні інструменти та фреймворки для розробки сучасних веб-сайтів.</p>
          </div>
        </div>
        <div className="course-footer">
          <p><strong>ПОСПІШАЙТЕ</strong><br />Старт нового курсу через <span className="days-left">0 днів</span></p>
          <button className="course-button" onClick={onWebPageClick}>Детальніше</button>
        </div>
      </div>
    </section>
  );
};

export default Course;
