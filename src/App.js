import React, { useState } from 'react';
import './App.css';
import Navigation from './components/front/PageStructure/Main/Navigation';
import NavigationWEB from './components/front/webpage/mainWeb/Navigationww';
import WebPage from './components/front/webpage/web';
import JavaPage from './components/front/javapage/java'; 
import PageStructure from './components/front/PageStructure/PageStructure';

function App() {
  const [language, setLanguage] = useState('UA'); 
  const [currentPage, setCurrentPage] = useState('main'); 

  const handleLanguageChange = () => {
    setLanguage(language === 'UA' ? 'EN' : 'UA');
  };

  const handleWebPageClick = () => {
    console.log('Web Page Clicked');
    setCurrentPage('webpage'); 
  };
  
  const handleJavaPageClick = () => {
    console.log('Java Page Clicked');
    setCurrentPage('javapage'); 
  };

  const handleLogoClick = () => {
    setCurrentPage('main'); 
  };

  return (
    <div className="App">
      {currentPage === 'main' ? (
        <Navigation language={language} onLanguageChange={handleLanguageChange} onLogoClick={handleLogoClick} />
      ) : currentPage === 'webpage' ? (
        <NavigationWEB language={language} onLanguageChange={handleLanguageChange} onLogoClick={handleLogoClick} />
      ) : (
        <NavigationWEB language={language} onLanguageChange={handleLanguageChange} onLogoClick={handleLogoClick} />
      )}

      {currentPage === 'main' ? (
        <PageStructure language={language} onWebPageClick={handleWebPageClick} onJavaPageClick={handleJavaPageClick} /> 
      ) : currentPage === 'webpage' ? (
        <WebPage language={language} />
      ) : (
        <JavaPage language={language} />
      )}
    </div>
  );
}

export default App;
