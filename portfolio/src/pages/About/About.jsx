// import React from 'react'

import "./About.css";

const About = () => {
  return (
    <div id="about" className="w-full">
      <div className="left-about">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>

        <div className="about-details">
          <div className="personal-info">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>Name</span>: Suraj Kumar
              </li>
              <li>
                <span>Age</span>: 21 Years
              </li>
              <li>
                <span>Gender</span>: Male
              </li>
              <li>
                <span>Language Known</span>: Hindi & English
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>Degree</span>: BCA
              </li>
              <li>
                <span>Gender</span>: Male
              </li>
              <li>
                <span>Language Known</span>: Hindi & English
              </li>
            </ul>
          </div>
          <div className="Skills">
            <h1>Skills</h1>
            <ul>
              <li>MERN STACK developer</li>
              <li>C | C++ | Javascript/Typescript</li>
              <li>Data Structure & Algorithms</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="right-about"></div>
    </div>
  );
};

export default About;
