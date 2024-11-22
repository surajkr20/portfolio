import { Link } from "react-scroll";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Link
        to="home" smooth={true}
        className="w-12 h-12 bg-[#340f0f] text-white flex items-center text-2xl justify-center rounded-full font-bold cursor-pointer"
      >
        <span className="text-pretty text-orange-600">s</span>k
      </Link>
    </div>
  );
};

export default Logo;
