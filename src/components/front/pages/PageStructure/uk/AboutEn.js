import React, { useState } from 'react';  
import '../Main/About.css';
import certificationImg from '../../../../img/about_img/diploma.svg';
import mentorsImg from '../../../../img/about_img/teachers-2.svg';
import controlImg from '../../../../img/about_img/appraisal-form.svg';
import graduatesImg from '../../../../img/about_img/student.svg';
import vector from '../../../../img/about_img/about-v.png'; 
import comput from '../../../../img/about_img/proposal-img.png'; 
import audience from '../../../../img/about_img/audience.png';
import Choice from '../../../Modul_choise/ChoiceEn';

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
        <div className="context"><h2>ABOUT US</h2></div>
        <p>The "Vector" educational space is a team of young, ambitious practitioner teachers who keep up with the development of IT technologies. Our goal is not just to teach children programming, but to instill a love for this field and teach them how to learn because IT is a field where one must constantly study something new.
        We have been working with children for ten years and, like no one else, we know that the main driver for them is interest, and our teachers know how to make this process truly exciting!</p>
        <div className="photo">
        <img src={vector} alt="v-vek" />
      </div>
      </div>
      
      <div className="additional-info">
        <div className="info-container">
          <img src={certificationImg} alt="Certification" />
          <h2>CERTIFICATION</h2>
          <p>We have created online programming courses certified by the Business Automation Association, and they are taught across Ukraine.</p>
        </div>
        <div className="info-container">
          <img src={mentorsImg} alt="5+ Mentors" />
          <h2>5+ MENTORS</h2>
          <p>Our team consists of five highly qualified practitioner mentors who love working with children. They know and will prove to you that programming is not only a high-paying activity but also an incredibly interesting one.</p>
        </div>
        <div className="info-container">
          <img src={controlImg} alt="Knowledge Control" />
          <h2>KNOWLEDGE CONTROL</h2>
          <p>In the personal account, you can monitor the student's progress. Tests, grades, and control tasks - all are displayed in the student's account! Parents will always be aware of how their child is studying.</p>
        </div>
        <div className="info-container">
          <img src={graduatesImg} alt="1000+ Graduates" />
          <h2>1000+ GRADUATES</h2>
          <p>Since 2013, we have had over 1000 graduates, most of whom have chosen the IT field for further education at the university level.</p>
        </div>
      </div>

      <div className="ring ring1"></div>
      <div className="ring ring2"></div>
      <div className="ring ring3"></div>

      <div className="bottom-section">
        <span className="vector-text">VECTOR</span>
        <div className="bottom-content">
          <p className="bottom-left">So, trust the experience and professionalism!</p>
          <div className="bottom-center">
            <img src={comput} alt="Central" />
          </div>
          <div className="bottom-right">
            <h2>REGISTER NOW</h2>
            <p>FOR A <span className='text'>FREE</span> MASTER CLASS TODAY</p>
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
          <h2>SO, TRUST THE EXPERIENCE AND PROFESSIONALISM! SIGN UP FOR A MASTER CLASS TODAY.</h2>
          <ul>
            <li>will get acquainted with the main areas of the online course and the format of learning;</li>
            <li>will understand the process and basic principles of programming (Java) or websites (web development);</li>
            <li>will get acquainted with uploading images and working with graphics (web development);</li>
            <li>will create their mini-game (Java) or write their first personal website (web development);</li>
            <li>after the master class, a mentor will connect with your child and explain all the mistakes in a phone call and why they occurred.</li>
          </ul>
          <button className="sign-up-button" onClick={handleOpenChoice}>Sign Up</button>
        </div>
      </div>

      <div className="target-audience">
        <div className="target-content">
          <div className="target-left">
            <img src={audience} alt="For whom" />
          </div>
          <div className="target-right">
          <div className="context"><h2>FOR CHILDREN AGED 12 TO 18</h2></div>
            <p>The Java and Web development course programs are designed in such a way that children of different ages can learn together in one group.</p>
          </div>
        </div>
      </div>
      
      <Choice isOpen={showChoice} onClose={handleCloseChoice} />
    </section>
  );
}

export default About;
