// import React from 'react';

const About = () => {
    return (
      <section className="bg-gray-100 text-gray-800 py-10 px-6">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Hi, I&apos;m <span className="text-blue-600">Suraj Kumar</span>
          </h1>
          <p className="text-lg text-gray-600">
            Frontend Developer | MERN Stack Enthusiast | Problem Solver
          </p>
        </div>
  
        {/* Personal Introduction */}
        <div className="max-w-3xl mx-auto mt-8 text-center">
          <p className="text-gray-700 text-md">
            I’m a passionate web developer and a final-year BCA student from
            Patliputra University, specializing in creating intuitive and
            user-friendly web applications. With expertise in React.js, Node.js,
            and modern JavaScript, I strive to deliver impactful solutions that
            make a difference.
          </p>
        </div>
  
        {/* Skills Section */}
        <div className="max-w-4xl mx-auto mt-10">
          <h2 className="text-2xl font-bold text-center mb-6">My Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-100 text-blue-600 py-2 px-4 rounded-md shadow">
              React.js
            </span>
            <span className="bg-green-100 text-green-600 py-2 px-4 rounded-md shadow">
              Node.js
            </span>
            <span className="bg-yellow-100 text-yellow-600 py-2 px-4 rounded-md shadow">
              JavaScript (ES6+)
            </span>
            <span className="bg-purple-100 text-purple-600 py-2 px-4 rounded-md shadow">
              MongoDB
            </span>
            <span className="bg-red-100 text-red-600 py-2 px-4 rounded-md shadow">
              Tailwind CSS
            </span>
            <span className="bg-gray-100 text-gray-600 py-2 px-4 rounded-md shadow">
              JWT Authentication
            </span>
          </div>
        </div>
  
        {/* Current Learning Section */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Currently Learning</h2>
          <p className="text-gray-700">
            I’m currently enhancing my skills in <span className="font-semibold">Next.js</span> and exploring advanced features like Zod validations, schemas, and full-stack integrations to broaden my expertise in modern web development.
          </p>
        </div>
  
        {/* Contact Section */}
       
      </section>
    );
  };
  
  export default About;
  

  // useGSAP(() => {
  //   gsap.from(".circle", {
  //     x: -100,
  //     duration: 1,
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: ".circle",
  //       scroll: "body",
  //       scrub: 2,
  //       start: "top 50%",
  //       end: "top 20%",
  //     },
  //   });
  // });
  // useGSAP(() => {
  //   gsap.from(".line", {
  //     x: -100,
  //     duration: 1,
  //     opacity: 0,
  //     stagger: 1,
  //     scrollTrigger: {
  //       trigger: ".line",
  //       scroll: "body",
  //       scrub: 2,
  //       start: "top 60%",
  //       end: "top 30%",
  //     },
  //   });
  // });