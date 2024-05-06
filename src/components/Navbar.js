import React from "react";
import "./navbar.css";
import worldincon from "../images/worldicon.png";
function Navbar() {
  return (
    <div className="navbar">
      <img src={worldincon} alt="icon" />
      <p className="navbar-text">my travel journal.</p>
    </div>
  );
}

export default Navbar;
