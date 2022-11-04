
import { useState } from "react";

import { NavLink } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [fix, setFix] = useState(false);

  const activeLink = "text-white";
  const normalLink = "text-dimWhite";

  function setFixed() {
    if (window.scrollY > 100) {
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener("scroll", setFixed)

  return (
    <nav className={`w-full flex py-6 left-0 justify-between items-center z-[999] ${fix ? "navbar fixed" : "navbar"}`}>
      <img src={logo} alt="logo" className="w-[125px] h-[35px] justify-start" />
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px]
              ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            >
              <NavLink to={nav.link}
                className={({isActive}) =>
                isActive ? activeLink : normalLink
                }
              >{nav.title}
              </NavLink>
            </li>
          ))}
        </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px]
              ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
            >
              <NavLink to={nav.link}
                className={({isActive}) =>
                isActive ? activeLink : normalLink
                }
              >{nav.title}</NavLink>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;