import React, { useState } from 'react';
import '../mainWeb/Aboutww.css';
import certificationImg from '../img/header_img/web-design.svg';
import mentorsImg from '../img/header_img/web-development.svg';
import controlImg from '../img/header_img/rocket.svg';
import graduatesImg from '../img/header_img/teleworking.svg';
import vector from '../../../../img/about_img/about-v.png'; 
import comput from '../../../../img/about_img/proposal-img.png'; 
import audience from '../../../../img/about_img/audience.png';
import Choice from '../../../Modul_choise/ChoiceEn';
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
            <h2>Why Web Development?</h2>
          </div>
          <p>Nowadays, the Internet platform, especially web programming, is rapidly developing. All the websites you interact with daily are created thanks to web technologies. This profession is in high demand and well-paid, but it also requires significant effort in learning, practice, and the development of logic and creativity. Therefore, it is essential to provide the foundation for your child from a young age to develop their interest, skills, and become more successful every day.</p>
        </div>
        <div className="photo1">
          <img src={vector} alt="v-vek" />
        </div>
      </div>

      <div className="additional-info1">
        <div className="info-container1">
          <img src={certificationImg} alt="Certification" />
          <h2>Relevance</h2>
          <p>Website creation is becoming an increasingly popular field of programming as a large part of the labor market moves to the online platform, and a quality website is an integral part of many sectors.</p>
        </div>
        <div className="info-container1">
          <img src={mentorsImg} alt="5+ Mentors" />
          <h2>Simplicity</h2>
          <p>There are many libraries, frameworks, CMS, and development environments available for website creation that significantly simplify the work of a web programmer.</p>
        </div>
        <div className="info-container1">
          <img src={controlImg} alt="Knowledge Control" />
          <h2>Development</h2>
          <p>Constant updates significantly expand the possibilities for web developers and increase site productivity.</p>
        </div>
        <div className="info-container1">
          <img src={graduatesImg} alt="1000+ Graduates" />
          <h2>Competitiveness</h2>
          <p>Specialists in this field are always in demand in the labor market!</p>
        </div>
      </div>

      <div className="bottom-section1">
        <span className="vector-text1">VECTOR</span>
        <div className="bottom-content1">
          <p className="bottom-left1">Trust experience and professionalism!</p>
          <div className="bottom-center1">
            <img src={comput} alt="Central" />
          </div>
          <div className="bottom-right1">
            <h2>SIGN UP</h2>
            <p>FOR A <span className='text1'>FREE</span> MASTERCLASS TODAY</p>
          </div>
        </div>
      </div>

      <div className="video-section1">
        <div className="video-left1">
          <img src={jamaster} alt="Central1" />
        </div>
        <div className="video-right1">
          <h2>At the masterclass, your child will learn:</h2>
          <ul>
            <li>Become familiar with the main directions of the online course and the learning format;</li>
            <li>Understand the process and basic principles of website creation;</li>
            <li>Get acquainted with uploading images and block layout;</li>
            <li>Create their first personal web page;</li>
            <li>After the masterclass, a mentor will connect with your child over the phone to show all the mistakes and explain why they occurred.</li>
          </ul>
          <button className="sign-up-button1" onClick={handleOpenChoice}>Register</button>
        </div>
      </div>

      <div className="web-dev-for-school">
        <div className="text-content">
          <h3>WEB DEVELOPMENT</h3>
          <h4>FOR SCHOOLCHILDREN</h4>
          <div className="text-content">
            <div className="text-wrapper">
              <div className="left-bar"></div>
              <p>We tried to structure our course to include enough theory and maximum practice. Mainly, this involves learning different elements of a website, its adaptability and functionality, developing a chat, creating a personal blog using a popular framework, and developing an online store on a popular platform.</p>
            </div>
          </div>
        </div>
      </div>

      <Choice isOpen={showChoice} onClose={handleCloseChoice} />
    </section>
  );
}

export default AboutWEB1;
