import { Link } from "react-router-dom";
import Navigation from "../layouts/Navigation";
import MenuHamburgar from "../MenuHamburgar";

const Header = () => {
  return (
    <div className="h-[75px] font-semibold text-[18px] flex items-center justify-between max-lg:px-8 lg:px-20 max-sm:py-7 py-14 cursor-pointer no-copy">
      {/* logo here */}
      <div className="hover:scale-105 transition-all group">
        <Link to="/" className="group-hover:opacity-75">
          igweFran6
        </Link>
        <span className="opacity-75 group-hover:opacity-100 transition-all group-active:underline underline-offset-4 no-copy">
          .com
        </span>
      </div>
      <div className="hidden lg:block">
        <Navigation />
      </div>
      <div className="lg:hidden">
        <MenuHamburgar />
      </div>
    </div>
  );
};

export default Header;
