import { Link } from "react-router-dom";
import Navigation from "../layouts/Navigation";

const Header = () => {
  return (
    <div className="h-[75px] font-semibold text-[18px] flex items-center justify-between px-7 cursor-pointer no-copy">
      {/* logo here */}
      <div className="hover:scale-105 transition-all group">
        <Link to="/" className="group-hover:opacity-75">
          igweFran6
        </Link>
        <span className="opacity-75 group-hover:opacity-100 transition-all group-active:underline underline-offset-4 no-copy">
          .com
        </span>
      </div>

      <Navigation />
    </div>
  );
};

export default Header;
