import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Fragment>
      <div className="clipPath"></div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Nav;
