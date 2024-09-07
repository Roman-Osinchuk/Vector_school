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

const PageStructure = ({ language, onWebPageClick, onJavaPageClick }) => {
  return (
    <>
      {language === 'UA' ? (
        <>
          <Header />
          <About />
          <Course onWebPageClick={onWebPageClick} onJavaPageClick={onJavaPageClick} />
          <Proces />
          <Webinars />
          <Contacts />
        </>
      ) : (
        <>
          <HeaderEn />
          <AboutEn />
          <CourseEn onWebPageClick={onWebPageClick} onJavaPageClick={onJavaPageClick} />
          <ProcesEn />
          <WebinarsEn />
          <ContactsEn />
        </>
      )}
    </>
  );
};

export default PageStructure;
