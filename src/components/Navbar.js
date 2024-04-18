// src/components/Navbar.js
import React from "react";
import "./css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="99acres Logo" />
      </div>
      <div className="dropdown">
        <button className="dropbtn">All India</button>
        <div className="dropdown-content">
          <button>Option 1</button>
          <button>Option 2</button>
          <button>Option 3</button>
        </div>
      </div>
      <div className="menu-options">
        <button>For Buyers</button>
        <button>For Tenants</button>
        <button>For Owners</button>
        <button>For Dealers / Builders</button>
        <button>InsightsNEW</button>
      </div>
      <button className="post-property-btn">Property</button>
      <div className="menu-btn">&#9776;</div>
    </nav>
  );
}

export default Navbar;
