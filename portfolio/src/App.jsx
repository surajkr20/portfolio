// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/contact/Contact";
import Skills from "./pages/Skills/Skills";
import BackgroundAnimation from "./BackgroundAnimation";

const App = () => {
  // eslint-disable-next-line react/prop-types
  function Layout({ children }) {
    return (
      <div className="layout">
        <BackgroundAnimation />
        {children}
      </div>
    );
  }

  return (
    <div>
      <Layout>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </div>
  );
};

export default App;
