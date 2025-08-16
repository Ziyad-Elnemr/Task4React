import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="navbar-nav">
          <Link className="nav-link fs-5 fw-bold mx-3" to="/">
            Home
          </Link>
          <Link className="nav-link fs-5 fw-bold mx-3" to="/about">
            About
          </Link>
          <Link className="nav-link fs-5 fw-bold mx-3" to="/Products">
            Products
          </Link>
          <Link className="nav-link fs-5 fw-bold mx-3" to="/AddProducts">
            Add Products
          </Link>
          <Link className="nav-link fs-5 fw-bold mx-3" to="/Login">
            Login
          </Link>
          <Link className="nav-link fs-5 fw-bold mx-3" to="/Signup">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
