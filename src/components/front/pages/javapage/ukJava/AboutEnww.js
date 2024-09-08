import React, { useState } from 'react';
import '../../webpage/mainWeb/Aboutww.css';
import certificationImg from '../img/header_img/programming.svg';
import mentorsImg from '../img/header_img/programmer.svg';
import controlImg from '../img/header_img/mobile.svg';
import graduatesImg from '../img/header_img/wallet.svg';
import vector from '../img/header_img/java-page.png'; 
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
      <h2>Why Java?</h2>
    </div>
    <p>Since its emergence in 1995, from the beginning of global computerization until today, the Java programming language has consistently been in demand in the market. Java is cross-platform, open-source, and free. It continues to actively develop, with regular updates, but old code remains relevant, so there's no need to adapt to something drastically new. Regarding employment, this programming language surpasses all metrics compared to other languages. Any programmer or tester can secure numerous job opportunities by learning the Java programming language.</p>
  </div>
  <div className="photo1">
    <img src={vector} alt="v-vek" />
  </div>
</div>


<div className="additional-info1">
        <div className="info-container1">
          <img src={certificationImg} alt="Certification" />
          <h2>Popularity</h2>
          <p>The Java programming language is used by 15.4% of developers (according to the DOU ranking).</p>
        </div>
        <div className="info-container1">
          <img src={mentorsImg} alt="5+ Mentors" />
          <h2>Ease</h2>
          <p>Java is easy for beginners, which later makes it easier to learn other programming languages.</p>
        </div>
        <div className="info-container1">
          <img src={controlImg} alt="Knowledge control" />
          <h2>Modernity</h2>
          <p>Cool Android apps are written in Java.</p>
        </div>
        <div className="info-container1">
          <img src={graduatesImg} alt="1000+ Graduates" />
          <h2>High Salary</h2>
          <p>The salary for Java developers starts at $600 for beginners.</p>
        </div>
      </div>
      
      <div className="bottom-section1">
        <span className="vector-text1">VECTOR</span>
        <div className="bottom-content1">
          <p className="bottom-left1">So, trust the experience and professionalism!</p>
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
            <li>get acquainted with the main directions of the online course and the training format;</li>
            <li>learn how the Random number generator works and is applied;</li>
            <li>get acquainted with the syntax of the Java language;</li>
            <li>create their own mini-game;</li>
            <li>after the masterclass, the mentor will connect with your child and in a phone call explain all the mistakes and why they occurred.</li>
          </ul>
          <button className="sign-up-button1" onClick={handleOpenChoice}>Register</button>
        </div>
      </div>
      <div className="web-dev-for-school">
  <div className="text-content">
    <h3>Programming Basics</h3>
    <h4>With Java for school students</h4>
    <div className="text-content">
      <div className="text-wrapper">
        <div className="left-bar"></div>
        <p>Most children are still unaware of the importance of education and the knowledge gained for their future, particularly their future profession. The main factor in children's development is interest. Therefore, we tried to build our course on practical examples that would spark interest in students and inspire them to work on their own. Primarily, this involves game development, working with graphics, and various "naughty" applications like viruses and blockers (exactly what appeals to schoolchildren). Who wouldn't dream of blocking the computer in the school auditorium?</p>
      </div>
    </div>
  </div>
</div>


      <Choice isOpen={showChoice} onClose={handleCloseChoice} />
    </section>
  );
}

export default AboutWEB1;
