// import React from 'react'
import '../Home/Home.css'
import man from "../../assets/man.png"
import TypingEffect from "react-typing-effect";

const Home = () => {
  return (
    <div id='home'>

      <div className="left-home">
        <div className="home-details">
          <div className="line1">I&lsquo;m</div>
          <div className="line2">Suraj Kumar</div>
          <div className="line3">
            <TypingEffect
              text={["Programmer","FullStack Developer","Software Engineer"]}
              speed={100}
              eraseSpeed={50}
              eraseDelay={1000}
              typingDelay={500}
              
            />
          </div>
        </div>
        <button id='btn' className='w-[150px] p-2 bg-slate-500 rounded-md border-none mt-8 mr-[65px]'>Hire Me</button>

      </div>

      <div className="right-home">
        <img src={man} alt="suraj kr" />
      </div>
    </div>
  )
}

export default Home;

