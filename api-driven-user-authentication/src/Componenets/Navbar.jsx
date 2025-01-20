import React from "react";
import "../Styles/NavStyles.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-brand">AccessHub </div>
      <div className="nav-links">
        <Link to="/"> Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/about"> About App</Link>
        <Link to="/userdetails">User Details</Link>
        {/* <Link to="/products">Products</Link>    //disabled product link  */}
      </div>
    </div>
  );
}

export default Navbar;
