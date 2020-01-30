import React, { Fragment, useState } from "react";
import classes from "./Menu.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import menuSVG from "../../assets/menu.svg";
import homeSVG from "../../assets/home.svg";
import keyboardSVG from "../../assets/keyboard.svg";
import settingsSVG from "../../assets/settings.svg";
import aboutUsSVG from "../../assets/aboutus.svg";

const Menu = props => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  const currentPathStyle = {
    backgroundColor: "#ddd",
    opacity: 1
  };

  const OpenedMenu = (
    <div className={classes.Menu}>
      <div className={classes.CloseMenu} onClick={toggleMenu} />
      <ul>
        <Link
          to="/"
          style={props.currentPath === "/" ? currentPathStyle : null}
        >
          Home
          <img src={homeSVG} alt="Home" />
        </Link>
        <Link
          to="/keyboard"
          style={props.currentPath === "/keyboard" ? currentPathStyle : null}
        >
          Keyboard
          <img src={keyboardSVG} alt="Keyboard" />
        </Link>
        <a href="https://www.talkerr.org">
          About Us
          <img alt="Settings" src={aboutUsSVG} />
        </a>
        <Link
          to="/settings"
          style={props.currentPath === "/settings" ? currentPathStyle : null}
        >
          Settings
          <img alt="Settings" src={settingsSVG} />
        </Link>
      </ul>
    </div>
  );

  return (
    <Fragment>
      {menuOpened ? (
        OpenedMenu
      ) : (
        <div className={classes.MenuIcon} onClick={toggleMenu}>
          <img alt="Menu" src={menuSVG} />
        </div>
      )}
    </Fragment>
  );
};

Menu.propTypes = {
  currentPath: PropTypes.string.isRequired
};

export default Menu;
