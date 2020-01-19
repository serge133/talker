import React from "react";
import classes from "./Styles.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StyledLink = props => {
  const linkStyle = {
    padding: "10px 20px",
    border: "3px solid #474747",
    borderRadius: 4,
    textDecoration: "none",
    color: "#474747",
    transitionDuration: "0.3s"
  };
  return (
    <Link
      to={props.to}
      style={{ ...props.style, ...linkStyle }}
      className={classes.Link}
    >
      {props.children}
    </Link>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default StyledLink;
