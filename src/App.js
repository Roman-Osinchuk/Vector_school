import React, { useState } from 'react';
import './App.css';
import Header from './components/front/Main/Header';
import About from './components/front/Main/About';
import Course from './components/front/Main/Course';
import Proces from './components/front/Main/Proces';
import Webinars from './components/front/Main/Webinars';
import Contacts from './components/front/Main/Contacts';
import Navigation from './components/front/Main/Navigation';

import HeaderEn from './components/front/uk/HeaderEn';
import AboutEn from './components/front/uk/AboutEn';
import CourseEn from './components/front/uk/CourseEn';
import ProcesEn from './components/front/uk/ProcesEn';
import WebinarsEn from './components/front/uk/WebinarsEn';
import ContactsEn from './components/front/uk/ContactsEn';
import NavigationEn from './components/front/uk/NavigationEn';

function App() {
  const [language, setLanguage] = useState('UA'); 
  const handleLanguageChange = () => {
    setLanguage(language === 'UA' ? 'EN' : 'UA');
  };

  return (
    <div className="App">
      <Navigation language={language} onLanguageChange={handleLanguageChange} />
      {language === 'UA' ? (
        <>
          <Header />
          <About />
          <Course />
          <Proces />
          <Webinars />
          <Contacts />
        </>
      ) : (
        <>
          <HeaderEn />
          <AboutEn />
          <CourseEn />
          <ProcesEn />
          <WebinarsEn />
          <ContactsEn />
        </>
      )}
    </div>
  );
}

export default App;
