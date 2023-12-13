import React from "react";
import "./Navbar.css";
import logo from "../Assets/Logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <div className="button">
        <button>Contact Now</button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="220"
          height="68"
          viewBox="0 0 241 68"
          fill="none"
        >
          <path
            d="M239.388 24.2623V1H1.38843V67H239.388V50.2295"
            stroke="#898D92"
            stroke-width="1.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
