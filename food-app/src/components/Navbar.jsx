import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/navbar.css";
import BurgerMenu from "./BurgerMenu";
import MobileMenu from "./MobileMenu";
import logo from "../assets/img/logo.png";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleSidebarLinkClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navLinks = [
    { title: "Home", link: "/" },
    { title: "Breakfast", link: "/menu/breakfast" },
    { title: "All Day Menu", link: "/menu/allday" },
    { title: "Contact", link: "/contact" },
    { title: "About", link: "/about" },
  ];

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo-img" />
      <nav className="nav">
        <ul className="nav-list">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <BurgerMenu onClick={toggleNav} isOpen={isNavOpen} />
      <MobileMenu isOpen={isNavOpen} onLinkClick={handleSidebarLinkClick} />
    </div>
  );
}

export default Navbar;
