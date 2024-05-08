import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
function App() {
  return (
    <div className="App">
       <TopBar />
       <NavBar />
       <HeroSection />
          </div>
  );
}

export default App;
