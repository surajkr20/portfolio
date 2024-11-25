// import React from "react";
import './Icons.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Icons = () => {

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from("#icon-cover", {
      x: 300,
      duration: 2,
      opacity: 0,
    });
  });

  return (
    <>
      {/* linkedIn icon */}
      <div className="social-container">
        {/* LinkedIn Icon */}
        <a id='icon-cover'
          href="https://www.linkedin.com/in/surajkumar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition-colors"
        >
          <i className="fab fa-linkedin text-2xl fill-current"></i>
        </a>

        {/* GitHub Icon */}
        <a  id='icon-cover'
          href="https://github.com/surajkumar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition-colors"
        >
          <i className="fab fa-github text-2xl fill-current"></i>
        </a>

        {/* X (formerly Twitter) Icon */}
        <a  id='icon-cover'
          href="https://twitter.com/surajkumar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white  transition-colors"
        >
          <i className="fab fa-twitter text-2xl fill-current"></i>
        </a>

        {/* Instagram Icon */}
        <a  id='icon-cover'
          href="https://www.instagram.com/surajkumar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition-colors"
        >
          <i className="fab fa-instagram text-2xl fill-current"></i>
        </a>
      </div>
    </>
  );
};

export default Icons;
