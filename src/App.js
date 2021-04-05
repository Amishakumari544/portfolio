import React from 'react'
import Menu from "./common/Menu";
import Home from "./components/home/Home"
import Services from './components/services/Services';
import {Switch , BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import MyEducation from "./components/education/MyEducation";
import About from './components/about/About';
import "./App.css";
function App() {
  return (
    <div>
      <Menu />
      
    <Router>
      <Home />
      <About />
      <MyEducation />
      <Services />
      <Contact />
      </Router>
    </div>
  )
}

export default App
