import React, { useState } from 'react';
import './App.css';
import Navigation from './components/front/PageStructure/Main/Navigation';
import NavigationWEB from './components/front/webpage/mainWeb/Navigationww';
import WebPage from './components/front/webpage/web';
import PageStructure from './components/front/PageStructure/PageStructure';

function App() {
  const [language, setLanguage] = useState('UA'); 
  const [currentPage, setCurrentPage] = useState('main'); 

  const handleLanguageChange = () => {
    setLanguage(language === 'UA' ? 'EN' : 'UA');
  };

  const handlePageChange = () => {
    setCurrentPage('details'); 
  };

  const handleLogoClick = () => {
    setCurrentPage('main'); 
  };

  return (
    <div className="App">
      {currentPage === 'main' ? (
        <Navigation language={language} onLanguageChange={handleLanguageChange} onLogoClick={handleLogoClick} />
      ) : (
        <NavigationWEB language={language} onLanguageChange={handleLanguageChange} onLogoClick={handleLogoClick} />
      )}
      {currentPage === 'main' ? (
        <PageStructure language={language} onButtonClick={handlePageChange} /> 
      ) : (
        <WebPage language={language} />
      )}
    </div>
  );
}

export default App;
