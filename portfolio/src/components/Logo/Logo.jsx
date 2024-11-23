import { Link } from "react-scroll";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const Logo = () => {

  useGSAP(()=>{
    let tl = gsap.timeline()
    tl.from('#link',{
      y:-100,
      duration: 1,
      opacity: 0
    })
    tl.from('nav-container li',{
      y:-100,
      duration: 1,
      opacity: 0,
      stagger:1
    })
  })

  return (
    <div className="flex items-center justify-center">
      <Link
        to="home" smooth={true}
        id="link"
        className="w-12 h-12 bg-[#340f0f] text-white flex items-center text-2xl justify-center rounded-full font-bold cursor-pointer"
      >
        <div className="text-pretty text-orange-600">s</div>
        <span>k</span>
      </Link>
    </div>
  );
};

export default Logo;
