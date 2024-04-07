import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/home.css";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home-bg"></div>
        <div className="home-content">
          <h1 className="home-title">Gastronomic Odyssey</h1>
          <h2 className="home-h2">Explore the Art of Flavor</h2>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "home-btn active" : "home-btn"
            }
          >
            BOOK A TABLE
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default Home;
