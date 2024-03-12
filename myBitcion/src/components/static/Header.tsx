import { useEffect, useState } from "react";
import Button from "../reUse/Button";
import { BsMenuButton } from "react-icons/bs";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const func = () => {
      if (window.pageYOffset > 2) {
        if (!document.startViewTransition) {
          setState(true);
        } else {
          document.startViewTransition(() => {
            setState(true);
          });
        }
      } else {
        if (!document.startViewTransition) {
          setState(false);
        } else {
          document.startViewTransition(() => {
            setState(false);
          });
        }
      }
    };

    window.addEventListener("scroll", func);
  }, []);

  return (
    <div
      className={`navbar h-[64px] top-0 z-[99] fixed w-full flex justify-center ${
        state ? "bg-blue-700" : "bg-transparent"
      } `}
    >
      <div className="w-[80%] text-white flex justify-between">
        <div className="navbar-start w-auto">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
              <MdMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>How It Works </a>
              </li>

              <li>
                <a>About</a>
              </li>

              <li>
                <a>Token</a>
              </li>

              <li>
                <a>Road Map</a>
              </li>

              <li>
                <a>FAQ</a>
              </li>

              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-[25px]">cryptoKING</a>
        </div>
        <div className="navbar-center w-auto hidden xl:flex">
          <ul className="menu menu-horizontal px-1 text-[20px] font-semibold">
            <li>
              <a>How It Works </a>
            </li>

            <li>
              <a>About</a>
            </li>

            <li>
              <a>Token</a>
            </li>

            <li>
              <a>Road Map</a>
            </li>

            <li>
              <a>FAQ</a>
            </li>

            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end w-auto justify-end  gap-3 hidden xl:flex">
          <Button text="Login" />
          <Button text="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default Header;
