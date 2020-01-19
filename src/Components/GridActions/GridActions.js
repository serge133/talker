import React from "react";
import classes from "./GridActions.css";
import PropTypes from "prop-types";

const GridActions = props => {
  return (
    <div className={classes.GridActions}>
      <button onClick={props.previousPage} className={classes.PreviousPage}>
        {props.page === 0 ? "Go Back" : "Previous Page"}
      </button>
      <button onClick={props.nextPage} className={classes.NextPage}>
        Next Page
      </button>
    </div>
  );
};

GridActions.propTypes = {
  page: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired
};

export default GridActions;
