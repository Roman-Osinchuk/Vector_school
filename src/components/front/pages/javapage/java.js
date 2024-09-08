import React, { useEffect } from 'react';
import HeaderWEB1 from '../javapage/mainJava/Headerww';
import AboutWEB1 from '../javapage/mainJava/Aboutww';
import CourseWEB1 from '../javapage/mainJava/Courseww';
import ProcesWEB1 from '../../Proces/Proces';
import WebinarsWEB1 from '../javapage/mainJava/Webinarsww';
import ContactsWEB1 from '../../Contacts/Contacts';

import HeaderEnWEB1 from '../javapage/ukJava/HeaderEnww';
import AboutEnWEB1 from '../javapage/ukJava/AboutEnww';
import CourseEnWEB1 from '../javapage/ukJava/CourseEnww';
import ProcesEnWEB1 from '../../Proces/ProcesEn';
import WebinarsEnWEB1 from '../javapage/ukJava/WebinarsEnww';
import ContactsEnWEB1 from '../../Contacts/ContactsEn';
const Javapage = ({ language }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

export default Javapage;
