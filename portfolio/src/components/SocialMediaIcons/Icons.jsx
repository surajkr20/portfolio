// import React from "react";

const Icons = () => {
  return (
    <>
      {/* linkedIn icon */}
      <div className="flex md:flex-row gap-7">
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/surajkumar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition-colors"
        >
          <i className="fab fa-linkedin text-2xl fill-current"></i>
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/surajkumar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-500 transition-colors"
        >
          <i className="fab fa-github text-2xl fill-current"></i>
        </a>

        {/* X (formerly Twitter) Icon */}
        <a
          href="https://twitter.com/surajkumar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors"
        >
          <i className="fab fa-twitter text-2xl fill-current"></i>
        </a>

        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/surajkumar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 transition-colors"
        >
          <i className="fab fa-instagram text-2xl fill-current"></i>
        </a>
      </div>
    </>
  );
};

export default Icons;
