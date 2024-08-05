import React from 'react';
import './App.css';
import Header from './components/front/Header';
import About from './components/front/About';
import Navigation from './components/front/Navigation';
import Course from './components/front/Course';
import Proces from './components/front/Proces';
import Webinars from './components/front/Webinars';
import Contacts from './components/front/Contacts';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header/>
      <About />
      <Course/>
      <Proces/>
      <Webinars/>
      <Contacts/>
    </div>
  );
}

export default App;
