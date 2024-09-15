import React, { useState } from 'react';
import './App.css';
import Navigation from './components/front/pages/PageStructure/Main/Navigation';
import NavigationSecond from './components/front/pages/webpage/mainWeb/Navigationww';
import WebPage from './components/front/pages/webpage/web';
import JavaPage from './components/front/pages/javapage/java'; 
import PageStructure from './components/front/pages/PageStructure/PageStructure';

function App() {
  const [language, setLanguage] = useState('UA'); 
  const [currentPage, setCurrentPage] = useState('main'); 

  const handleLanguageChange = () => {
    setLanguage(language === 'UA' ? 'EN' : 'UA');
  };

  const handleWebPageClick = () => {
    setCurrentPage('webpage'); 
  };
  
  const handleJavaPageClick = () => {
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
        <NavigationSecond language={language} onLanguageChange={handleLanguageChange} onLogoClick={handleLogoClick} />
      ) : (
        <NavigationSecond language={language} onLanguageChange={handleLanguageChange} onLogoClick={handleLogoClick} />
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
