import "../assets/styles/mobilemenu.css";
import { NavLink } from "react-router-dom";

function MobileMenu({ isOpen, onLinkClick }) {
  const MobileNavLinks = [
    { title: "Home", link: "/" },
    { title: "Breakfast", link: "/menu/breakfast" },
    { title: "All Day Menu", link: "/menu/allday" },
    { title: "Contact", link: "/contact" },
    { title: "About", link: "/about" },
  ];
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <ul className="mobile-nav-list">
          {MobileNavLinks.map((link, index) => (
            <li key={index} onClick={onLinkClick}>
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  isActive ? "mobile-nav-link active" : "mobile-nav-link"
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default MobileMenu;
