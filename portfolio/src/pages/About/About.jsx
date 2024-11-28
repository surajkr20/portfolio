// import React from 'react'
import "./About.css";
import man from "../../assets/profilepic.jpg";
import AnimeText from "../../components/AnimeText/AnimeText";

const About = () => {
  return (
    <div id="about">
      {/* head section */}
      <div className="head">
        <AnimeText Text="Hii, i'm Suraj Kumar" className="!text-3xl" />
        <p>Frontend Developer | MERN Stack Enthusiast | Problem Solver</p>
      </div>
      <main id="main" className="mx-auto px-16">
        <div className="text-content">
          <div className="left-content">
            <h1>Skills & Expertise</h1>
            <p>
              I’m a passionate web developer and a final-year BCA student from
              Patliputra University, specializing in designing and developing
              intuitive, user-friendly, and scalable web applications. With
              expertise in modern technologies like HTML, CSS, JavaScript,
              TypeScript, React.js, Next.js, Node.js, Express.js, MongoDB, and
              Firebase, I strive to build impactful solutions. My proficiency in
              JWT authentication and other advanced web development practices
              enables me to deliver secure and efficient digital experiences.
            </p>
          </div>
          <div className="left-content">
            <h1>Current Learning Goals</h1>
            <p>
              Alongside my expertise in web development, I am currently
              enhancing my problem-solving skills by learning Data Structures
              and Algorithms (DSA) in C++. This journey is helping me strengthen
              my logical thinking and optimize solutions, ensuring I can tackle
              complex computational challenges effectively. At the same time, I
              am actively developing full-stack projects to apply my technical
              skills and create scalable, efficient applications that solve
              real-world problems.
            </p>
          </div>
          <div className="left-content">
            <h1 className="">Get in Touch</h1>
            <p className="text-gray-600">
              Let’s collaborate or discuss exciting opportunities. Reach out to
              me on LinkedIn or GitHub, or drop me an email.
            </p>
          </div>
        </div>
        <div className="img-content">
          <div className="img-div p-4">
            <img src={man} alt="" />
          </div>
          <div className="flex justify-start gap-6">
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-black"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white py-2 px-4 rounded shadow hover:bg-black"
            >
              GitHub
            </a>
            <a
              href="mailto:your-email@example.com"
              className="bg-green-600 text-white py-2 px-4 rounded shadow hover:bg-black"
            >
              Email Me
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
