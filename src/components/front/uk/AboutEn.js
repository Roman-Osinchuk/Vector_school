import React, { useState } from 'react';  
import '../Main/About.css';
import certificationImg from '../../img/about_img/diploma.svg';
import mentorsImg from '../../img/about_img/teachers-2.svg';
import controlImg from '../../img/about_img/appraisal-form.svg';
import graduatesImg from '../../img/about_img/student.svg';
import vector from '../../img/about_img/about-v.png'; 
import comput from '../../img/about_img/proposal-img.png'; 
import audience from '../../img/about_img/audience.png';
import Choice from '../uk/ChoiceEn';

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
      <div className="section-content1">
        <div className="context"><h2>ABOUT US</h2></div>
        <p>The "Vector" learning space is a team of young, ambitious practicing educators who keep pace with the development of IT technologies. Our goal is not just to teach children programming, but to instill a love for this field and teach them how to learn, as IT is an area where you need to continuously learn something new.
        We have been working with children for ten years and know that their main driving force is interest, and our educators know how to make this process truly exciting!</p>
        <div className="photo">
        <img src={vector} alt="v-vek" />
      </div>
      </div>
      
      <div className="additional-info1">
        <div className="info-container1">
          <img src={certificationImg} alt="Certification" />
          <h2>CERTIFICATION</h2>
          <p>We have created online programming courses that are certified by the Business Automation Union and are recognized throughout Ukraine.</p>
        </div>
        <div className="info-container1">
          <img src={mentorsImg} alt="5+ Mentors" />
          <h2>5+ MENTORS</h2>
          <p>Our team includes five highly qualified mentors who know and love working with children. They know better than anyone and will prove to you that programming is not only a highly paid activity but also a mega-interesting one.</p>
        </div>
        <div className="info-container1">
          <img src={controlImg} alt="Knowledge Control" />
          <h2>KNOWLEDGE CONTROL</h2>
          <p>In the personal cabinet, you can monitor the student's progress. Tests, grades, and assignments are all displayed in the student's cabinet! Parents will always be aware of how their child is doing.</p>
        </div>
        <div className="info-container1">
          <img src={graduatesImg} alt="1000+ Graduates" />
          <h2>1000+ GRADUATES</h2>
          <p>Since 2013, we have had over 1000 graduates, most of whom have chosen the IT field for further study at university.</p>
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
          <h2>SO, TRUST THE EXPERIENCE AND PROFESSIONALISM! REGISTER FOR THE MASTER CLASS TODAY.</h2>
          <ul>
            <li>Get acquainted with the main areas of the online course and the format of learning;</li>
            <li>Understand the process and basic principles of programming (Java) or website development (web development);</li>
            <li>Get familiar with image loading and graphics work (web development);</li>
            <li>Create your mini-game (Java) or write your first own web page (web development);</li>
            <li>After the master class, a mentor will contact your child by phone to show all the mistakes and explain why they occurred.</li>
          </ul>
          <button className="sign-up-button" onClick={handleOpenChoice}>Sign Up</button>
        </div>
      </div>

      <div className="target-audience">
        <div className="target-content">
          <div className="target-left">
            <img src={audience} alt="For Whom" />
          </div>
          <div className="target-right">
          <div className="context"><h2>FOR CHILDREN AGED 12 TO 18</h2></div>
            <p>The course programs for Java and WEB development are designed in such a way that children of different ages can study in one group.</p>
          </div>
        </div>
      </div>
      
      <Choice isOpen={showChoice} onClose={handleCloseChoice} />
    </section>
  );
}

export default About;
