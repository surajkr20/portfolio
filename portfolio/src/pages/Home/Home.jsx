// import React from 'react'
import "../Home/Home.css";
import man from "../../assets/profilepic.jpg";
import TypingEffect from "react-typing-effect";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Icons from "../../components/SocialMediaIcons/Icons";

const Home = () => {
  useGSAP(() => {
    gsap.from(".left-home img", {
      x: -100,
      duration: 1.5,
    });
  });

  return (
    <div id="home">
      <div className="left-home">
        <img src={man} alt="suraj kr" />
        <Icons />
        <div id="type-writer" className="line3">
          <TypingEffect
            text={["Programmer", "MERN Stack Developer", "Software Engineer"]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={1000}
            typingDelay={500}
          />
        </div>
      </div>

      <div className="right-home">
        <div className="home-details">
          
          <h1>
            Turning Vision Into Reality With Code And Design
          </h1>

          <p>
            As a skilled MERN STACK developer and programmer, i am dedicated to turning ideas into innovative web applications.
            Explore my latest projects, showcasing my expertise in React/Next.js and web development 
          </p>

        </div>

        <div>
          <button id="btn">Resume</button>
          {/* <button id="btn">Hire Me</button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
