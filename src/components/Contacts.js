import React from 'react';
import './Contacts.css';
import logo from './img/header_img/logo.png';
import { ReactComponent as FacebookIcon } from './img/about_img/facebook-1.svg';
import { ReactComponent as InstagramIcon } from './img/about_img/instagram-2.svg';
import { ReactComponent as YouTubeIcon } from './img/about_img/youtube-1.svg';
import locationIcon from './img/contacts_img/placeholder.svg'; 
import phoneIcon from './img/contacts_img/phone-call.svg'; 
import clockIcon from './img/contacts_img/clock.svg'; 
import emailIcon from './img/contacts_img/email.svg'; 

const Contacts = () => {
  return (
    <section id="contacts" className="sectionContacts">
      <div className="background-circle"></div> 
      <div className="contacts-container">
        <div className="contact-info">
          <h2>КОНТАКТИ</h2>
          <p><img src={locationIcon} alt="Location icon" className="contact-icon" /> Хмельницький, вул. Проскурівського Підпілля, 63 (ТЦ "Атріум", 3-й поверх)</p>
          <p><img src={phoneIcon} alt="Phone icon" className="contact-icon" /> +380673825500</p>
          <p><img src={clockIcon} alt="Clock icon" className="contact-icon" /> Пн-Нд: 10:00 - 18:00</p>
          <p><img src={emailIcon} alt="Email icon" className="contact-icon" /> sales@vector.com.ua</p>
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
            <a href="https://www.facebook.com/vector.km.ua" className="social-icon">
              <FacebookIcon width="24" height="24" />
            </a>
            <a href="https://www.youtube.com/channel/UCLDHwguJi4MA7xslMk4hooA" className="social-icon">
              <YouTubeIcon width="24" height="24" />
            </a>
            <a href="https://www.instagram.com/vector_km_ua/" className="social-icon">
              <InstagramIcon width="24" height="24" />
            </a>
          </div>
        </div>
      </footer>

    </section>
  );
}

export default Contacts;
