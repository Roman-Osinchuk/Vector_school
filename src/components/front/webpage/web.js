
import React from 'react';
import HeaderWEB1 from '../webpage/mainWeb/Headerww';
import AboutWEB1 from '../webpage/mainWeb/Aboutww';
import CourseWEB1 from '../webpage/mainWeb/Courseww';
import ProcesWEB1 from '../webpage/mainWeb/Procesww';
import WebinarsWEB1 from '../webpage/mainWeb/Webinarsww';
import ContactsWEB1 from '../webpage/mainWeb/Contactsww';

import HeaderEnWEB1 from '../webpage/ukWeb/HeaderEnww';
import AboutEnWEB1 from '../webpage/ukWeb/AboutEnww';
import CourseEnWEB1 from '../webpage/ukWeb/CourseEnww';
import ProcesEnWEB1 from '../webpage/ukWeb/ProcesEnww';
import WebinarsEnWEB1 from '../webpage/ukWeb/WebinarsEnww';
import ContactsEnWEB1 from '../webpage/ukWeb/ContactsEnww';

const webPage = ({ language }) => {
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

export default webPage;
