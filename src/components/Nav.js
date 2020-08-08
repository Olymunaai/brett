import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="menu-1">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/skills" className="menu-2">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="menu-3">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
      <div className="burger-div">
        <span className="burger"> </span>
        <span className="burger"> </span>
        <span className="burger"> </span>
      </div>
    </Fragment>
  );
};

export default Nav;
