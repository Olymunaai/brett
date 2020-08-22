import React, { Fragment, useState, useEffect } from "react";
import "./theme.css";

const Theme = () => {
  const [theme, setTheme] = useState({
    theme1: "#455a64",
    theme2: "#37474f",
    theme3: "#263238",
    text: "white",
  });

  const [toggle, setToggle] = useState("");

  useEffect(() => {
    const { theme1, theme2, theme3, text } = theme;
    document.documentElement.style.setProperty("--color2", theme1);
    document.documentElement.style.setProperty("--color3", theme2);
    document.documentElement.style.setProperty("--color4", theme3);
    document.documentElement.style.setProperty("--color1", text);
  });

  const themeSelector = (theme1, theme2, theme3, text) => {
    setTheme({ theme1, theme2, theme3, text });
  };

  const toggleOn = () => {
    if (toggle === "") {
      setToggle("slide");
    } else {
      setToggle("");
    }
  };

  const toggleOff = () => {};

  return (
    <div onClick={toggleOn}>
      <div className="theme">
        <div className="layer1"></div>
        <div className="layer2"></div>
      </div>
      <ul className={"themeSelect " + toggle}>
        <li
          className="themeColor"
          onClick={() => {
            themeSelector("#455a64", "#37474f", "#263238", "white");
          }}
        >
          <h5 className="colorName">Original</h5>
          <div className="selectionColor original">
            <div className="color1 original1"></div>
            <div className="color2 original2"></div>
          </div>
        </li>
        <li
          className="themeColor"
          onClick={() => {
            themeSelector("#46769B", "#2F5F8A", "#174978", "white");
          }}
        >
          <h5 className="colorName">Blue</h5>
          <div className="selectionColor blue">
            {" "}
            <div className="color1 blue1"></div>
            <div className="color2 blue2"></div>
          </div>
        </li>
        <li
          className="themeColor"
          onClick={() => {
            themeSelector("#733326", "#4C231A", "#26110D", "white");
          }}
        >
          <h5 className="colorName">Brown</h5>
          <div className="selectionColor brown">
            {" "}
            <div className="color1 brown1"></div>
            <div className="color2 brown2"></div>
          </div>
        </li>
        <li
          className="themeColor"
          onClick={() => {
            themeSelector("#55275e", "#321A37", "#2A132F", "white");
          }}
        >
          <h5 className="colorName">Purple</h5>
          <div className="selectionColor purple">
            {" "}
            <div className="color1 purple1"></div>
            <div className="color2 purple2"></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Theme;
