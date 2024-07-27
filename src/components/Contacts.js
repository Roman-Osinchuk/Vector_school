import React from 'react';
import './Contacts.css';
import logo from './img/header_img/logo.png';

const Contacts = () => {
  return (
    <section id="contacts" className="sectionContacts">
      <div className="contacts-container">
        <div className="contact-info">
          <h2>КОНТАКТИ</h2>
          <p><i className="fas fa-map-marker-alt"></i> Хмельницький, вул. Проскурівського Підпілля, 63 (ТЦ "Атріум", 3-й поверх)</p>
          <p><i className="fas fa-phone"></i> +380673825500</p>
          <p><i className="fas fa-clock"></i> Пн-Нд: 10:00 - 18:00</p>
          <p><i className="fas fa-envelope"></i> sales@vector.com.ua</p>
          <button className="rekvizyty-btn">Реквізити</button>
          <p>Умови надання послуг та повернення коштів</p>
          <p>Договір Веб розробка</p>
        </div>
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.1260999307437!2d26.981928276497253!3d49.42542997141463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473206f8fca0c215%3A0x403b8bbf2b0e216f!2z0JDRgtGA0ZbRg9C8!5e0!3m2!1suk!2sua!4v1722082111359!5m2!1suk!2sua"
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <img src={logo} alt="Vector logo" />
          <div className="social-media">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="footer-info">
          
            
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Contacts;
