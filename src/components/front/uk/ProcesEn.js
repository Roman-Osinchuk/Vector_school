import React from 'react';
import '../Main/Proces.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../../img/proces_img/p-1.png';
import Image2 from '../../img/proces_img/p-2.png';
import Image3 from '../../img/proces_img/p-3.png';
import Image4 from '../../img/proces_img/p-4.png';
import Image5 from '../../img/proces_img/p-5.png';
import Image6 from '../../img/proces_img/p-6.png';
import Review1 from '../../img/proces_img/ja-master.png';
import Review2 from '../../img/proces_img/ja-master.png';
import Review3 from '../../img/proces_img/ja-master.png';

const Proces = () => {
  const steps = [
    { number: 1, title: 'Registration', description: 'Choose a course and register for the master class', imgSrc: Image1 },
    { number: 2, title: 'Choose Course', description: 'Confirm your desire to learn and make a payment', imgSrc: Image2 },
    { number: 3, title: 'Access', description: 'Receive the textbook by mail and access learning materials via email', imgSrc: Image3 },
    { number: 4, title: 'Learning', description: 'Participate in online classes according to the schedule and complete homework at your convenience', imgSrc: Image4 },
    { number: 5, title: 'Support', description: 'Continuous support from the instructor throughout the course', imgSrc: Image5 },
    { number: 6, title: 'Certificate', description: 'Receive a certificate upon successful completion of the course', imgSrc: Image6 }
  ];

  const reviews = [
    { name: 'Alexander Shurila', text: 'Great courses. My son has been studying for three years and loves it...', imgSrc: Review1 },
    { name: 'Tetyana Hydko', text: 'My son started a year ago. We chose from several training centers...', imgSrc: Review2 },
    { name: 'Oleg Lavreniuk', text: 'My son has been studying programming courses for over 4 years. He really likes it...', imgSrc: Review3 },
    { name: 'Lyudmila', text: 'Just completed the first module, satisfied. The female instructors put their heart into their work. Super. Recommended.', imgSrc: Review3 },
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
      <h1>How the Learning Process Works</h1>
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
          <h1>Reviews</h1>
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
