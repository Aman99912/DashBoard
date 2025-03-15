import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-title">Dashboard</h1>
      <div className="navbar-actions">
        <input type="text" placeholder="Search..." className="navbar-input" />
        <button className="navbar-button">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
