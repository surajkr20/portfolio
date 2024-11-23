// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./App.css"
import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/contact/Contact';
import Skills from './pages/Skills/Skills';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App;