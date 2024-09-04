import React from 'react';
import Header from './Main/Header';
import About from './Main/About';
import Course from './Main/Course';
import Proces from './Main/Proces';
import Webinars from './Main/Webinars';
import Contacts from './Main/Contacts';

import HeaderEn from './uk/HeaderEn';
import AboutEn from './uk/AboutEn';
import CourseEn from './uk/CourseEn';
import ProcesEn from './uk/ProcesEn';
import WebinarsEn from './uk/WebinarsEn';
import ContactsEn from './uk/ContactsEn';

const PageStructure = ({ language, onButtonClick }) => {
  return (
    <>
      {language === 'UA' ? (
        <>
          <Header />
          <About />
          <Course onButtonClick={onButtonClick} /> {/* Передати функцію */}
          <Proces />
          <Webinars />
          <Contacts />
        </>
      ) : (
        <>
          <HeaderEn />
          <AboutEn />
          <CourseEn onButtonClick={onButtonClick} /> {/* Передати функцію */}
          <ProcesEn />
          <WebinarsEn />
          <ContactsEn />
        </>
      )}
    </>
  );
};

export default PageStructure;
