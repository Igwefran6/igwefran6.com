import { Link } from "react-router-dom";
import { useScrollContext } from "../hooks/useScrollContext";
const MenuDropdown = ({ visible, handleClick }) => {
  const { dispatch } = useScrollContext();
  return (
    <>
      {visible && (
        <div className="p-8 w-[200px] bg-primary-transparent  rounded-lg">
          <ul>
            <li
              className="active:underline underline-offset-2 active:opacity-65 hover:after:content-['↗']"
              onClick={() => {
                dispatch({ type: "about" });
                handleClick();
              }}
            >
              About
            </li>
            <li
              className="active:underline underline-offset-2 active:opacity-65 hover:after:content-['↗']"
              onClick={() => {
                dispatch({ type: "contact" });
                handleClick();
              }}
            >
              Contact
            </li>
            <li
              className="active:underline underline-offset-2 active:opacity-65 hover:after:content-['↗']"
              onClick={() => {
                dispatch({ type: "project" });
                handleClick();
              }}
            >
              Projects
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
