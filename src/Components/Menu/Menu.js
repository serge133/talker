import React, { Fragment, useState } from "react";
import classes from "./Menu.css";
// import PropTypes from "prop-types";
import menuSVG from "../../assets/menu.svg";
import keyboardSVG from "../../assets/keyboard.svg";
import settingsSVG from "../../assets/settings.svg";
import { Link } from "react-router-dom";

const Menu = props => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  const OpenedMenu = (
    <div className={classes.Menu}>
      <div className={classes.CloseMenu} onClick={toggleMenu} />
      <ul>
        <Link to="/keyboard">
          Keyboard
          <img src={keyboardSVG} alt="Keyboard" />
        </Link>
        <Link to="/settings">
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

Menu.propTypes = {};

export default Menu;
