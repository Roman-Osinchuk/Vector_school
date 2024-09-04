import React from 'react';
import '../mainWeb/Procesww.css';
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
    { number: 1, title: 'Registration', description: 'Choose a course and register for the master class', imgSrc: Image1 },
    { number: 2, title: 'Choose a Course', description: 'Confirm your desire to learn and make the payment', imgSrc: Image2 },
    { number: 3, title: 'Access', description: 'Receive the textbook by mail and access to learning materials via email', imgSrc: Image3 },
    { number: 4, title: 'Learning', description: 'Participate in online classes as scheduled and complete homework at your convenience', imgSrc: Image4 },
    { number: 5, title: 'Support', description: 'Constant support from the instructor during the course', imgSrc: Image5 },
    { number: 6, title: 'Certificate', description: 'Receive a certificate upon successful completion of the course', imgSrc: Image6 }
  ];


  return (
    <section id="proces" className="sectionProces">
      <h2>HOW DOES THE LEARNING PROCESS WORK?</h2>
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
