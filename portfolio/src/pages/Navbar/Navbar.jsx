
import { useRef } from "react";
import Logo from "../../components/Logo/Logo";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {

  const menu = useRef()
  const mobile = useRef()

  return (
    <>
      <nav className="nav-container flex flex-row items-center justify-between w-full mx-auto px-16 py-4">

        {/* logo icon */}
        <Logo />

        {/* Desktop Menu */}
        <ul className="desktop-menu nav-list flex flex-row items-center gap-6 list-none cursor-pointer text-white">
          <Link to="home" smooth={true} duration={500} activeClass='active' spy={true}><li>Home</li></Link>
          <Link to="about" smooth={true} duration={500} activeClass='active' spy={true}><li>About</li></Link>
          <Link to="projects" smooth={true} duration={500} activeClass='active' spy={true}><li>Projects</li></Link>
          <Link to="contact" smooth={true} duration={500} activeClass='active' spy={true}><li>Contact</li></Link>
        </ul>

        {/* hamburger menu */}
        <div className="hamburger" ref={menu} onClick={()=>{
          mobile.current.classList.toggle('activemobile')
          mobile.current.classList.toggle('activeham')
        }
        }>
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>

        {/* Mobile Menu */}
        <ul ref={mobile} 
        className="mobile-menu nav-list flex flex-col items-center justify-center gap-10 list-none cursor-pointer text-white">
          <Link to="home" smooth={true} duration={500} activeClass='active' spy={true}><li>Home</li></Link>
          <Link to="about" smooth={true} duration={500} activeClass='active' spy={true}><li>About</li></Link>
          <Link to="projects" smooth={true} duration={500} activeClass='active' spy={true}><li>Projects</li></Link>
          <Link to="contact" smooth={true} duration={500} activeClass='active' spy={true}><li>Contact</li></Link>
        </ul>

      </nav>
    </>
  );
};

export default Navbar;
