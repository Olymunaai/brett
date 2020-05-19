import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Fragment>
      <div class="clipPath"></div>
      <nav class="navbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/skills">Skills</Link>
          </li>
          <li class="nav-item">
            <Link to="/projects">Projects</Link>
          </li>
          {/* <li class="nav-item">
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Nav;
