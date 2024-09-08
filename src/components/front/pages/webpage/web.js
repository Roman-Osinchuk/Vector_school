import React, { useEffect } from 'react';
import HeaderWEB1 from '../webpage/mainWeb/Headerww';
import AboutWEB1 from '../webpage/mainWeb/Aboutww';
import CourseWEB1 from '../webpage/mainWeb/Courseww';
import ProcesWEB1 from '../../Proces/Proces';
import WebinarsWEB1 from '../webpage/mainWeb/Webinarsww';
import ContactsWEB1 from '../../Contacts/Contacts';

import HeaderEnWEB1 from '../webpage/ukWeb/HeaderEnww';
import AboutEnWEB1 from '../webpage/ukWeb/AboutEnww';
import CourseEnWEB1 from '../webpage/ukWeb/CourseEnww';
import ProcesEnWEB1 from '../../Proces/ProcesEn';
import WebinarsEnWEB1 from '../webpage/ukWeb/WebinarsEnww';
import ContactsEnWEB1 from '../../Contacts/ContactsEn';

const WebPage = ({ language }) => {
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

export default WebPage;
