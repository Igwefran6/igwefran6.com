import { Link } from "react-router-dom";
const MenuDropdown = ({ visible, handleClick }) => {
  return (
    <>
      {visible && (
        <div className="p-8 w-[200px] bg-primary-transparent  rounded-lg">
          <ul>
            <li
              className="active:underline underline-offset-2 active:opacity-65 hover:after:content-['↗']"
              onClick={handleClick}
            >
              <Link to="/">About</Link>
            </li>
            <li
              className="active:underline underline-offset-2 active:opacity-65 hover:after:content-['↗']"
              onClick={handleClick}
            >
              <Link to="/">Contact</Link>
            </li>
            <li
              className="active:underline underline-offset-2 active:opacity-65 hover:after:content-['↗']"
              onClick={handleClick}
            >
              <Link to="/">Projects</Link>
            </li>
            <li
              className="active:underline underline-offset-2 active:opacity-65 hover:after:content-['↗']"
              onClick={handleClick}
            >
              <Link to="/">Services</Link>
            </li>
            <li
              className="active:underline underline-offset-2 active:opacity-65 hover:after:content-['↗']"
              onClick={handleClick}
            >
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MenuDropdown;
