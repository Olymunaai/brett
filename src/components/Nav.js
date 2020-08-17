import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [show, setShow] = useState("");

  const onClick = () => {
    if (show === "") {
      setShow("show");
    } else {
      setShow("");
    }
  };

  return (
    <Fragment>
      <nav className="navbar">
        <ul className={show + " navbar-nav"}>
          <li className="nav-item" onClick={onClick}>
            <Link to="/" className="menu-1">
              Home
            </Link>
          </li>
          <li className="nav-item" onClick={onClick}>
            <Link to="/skills" className="menu-2">
              Skills
            </Link>
          </li>
          <li className="nav-item" onClick={onClick}>
            <Link to="/projects" className="menu-3">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
      <div className=" burger-div" onClick={onClick}>
        <span className="burger"> </span>
        <span className="burger"> </span>
        <span className="burger"> </span>
      </div>
    </Fragment>
  );
};

export default Nav;
