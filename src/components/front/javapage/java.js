
import React from 'react';
import HeaderWEB1 from '../javapage/mainJava/Headerww';
import AboutWEB1 from '../javapage/mainJava/Aboutww';
import CourseWEB1 from '../javapage/mainJava/Courseww';
import ProcesWEB1 from '../javapage/mainJava/Procesww';
import WebinarsWEB1 from '../javapage/mainJava/Webinarsww';
import ContactsWEB1 from '../javapage/mainJava/Contactsww';

import HeaderEnWEB1 from '../javapage/ukJava/HeaderEnww';
import AboutEnWEB1 from '../javapage/ukJava/AboutEnww';
import CourseEnWEB1 from '../javapage/ukJava/CourseEnww';
import ProcesEnWEB1 from '../javapage/ukJava/ProcesEnww';
import WebinarsEnWEB1 from '../javapage/ukJava/WebinarsEnww';
import ContactsEnWEB1 from '../javapage/ukJava/ContactsEnww';

const javapage = ({ language }) => {
  return (
    <>
      {language === 'UA' ? (
        <>
          <HeaderWEB1 />
          <AboutWEB1 />
          <CourseWEB1 />
          <ProcesWEB1 />
          <WebinarsWEB1 />
          <ContactsWEB1 />
        </>
      ) : (
        <>
          <HeaderEnWEB1 />
          <AboutEnWEB1 />
          <CourseEnWEB1 />
          <ProcesEnWEB1 />
          <WebinarsEnWEB1 />
          <ContactsEnWEB1 />
        </>
      )}
    </>
  );
};

export default javapage;
