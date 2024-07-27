import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Navigation from './components/Navigation';
import Course from './components/Course';
import Proces from './components/Proces';
import Webinars from './components/Webinars';
import Contacts from './components/Contacts';

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
