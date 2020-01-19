import React, { useState } from "react";
import classes from "./App.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actionTypes";
import ActionGrid from "../../Containers/ActionGrid/ActionGrid";
import GridActions from "../../Components/GridActions/GridActions";
import OutputField from "../../Containers/OutputField/OutputField";
import { textToSpeech } from "../../Functions/TextToSpeech";
import StyledLink from "../../Styles/Link";

const App = props => {
  const [page, setPage] = useState(0);
  const [outputField, setOutputField] = useState([]);
  const maxGridItems = props.rows * props.columns;

  const nextPage = () => {
    const pages = Math.ceil(props.gridItems.length / maxGridItems);
    let newPageNum = 0;
    if (page + 1 === pages) return;
    newPageNum = page + 1;
    setPage(newPageNum);
  };

  const previousPage = () => {
    let newPageNum = 0;
    if (page - 1 < 0) return props.changeGrid("folders");
    newPageNum = page - 1;
    setPage(newPageNum);
  };

  const handleClick = gridItem => {
    if (gridItem.folder) {
      props.changeGrid(gridItem.type);
    } else {
      textToSpeech(gridItem.msg, props.voice);
      setOutputField(outputField.concat(gridItem));
    }
  };

  const clearOutputField = () => {
    const copyOutputField = [...outputField];
    copyOutputField.splice(copyOutputField.length - 1, 1);
    setOutputField(copyOutputField);
  };

  return (
    <div className={classes.App}>
      {/* <Link to="/settings" className={classes.Settings}>
        <img src={settingsSVG} alt="settings" />
      </Link> */}
      <StyledLink
        style={{ position: "fixed", top: 0, right: 0, zIndex: 999, margin: 20 }}
        to="/settings"
      >
        Settings
      </StyledLink>
      <OutputField field={outputField} clearField={clearOutputField} />
      <ActionGrid
        rows={props.rows}
        columns={props.columns}
        gridItems={props.gridItems}
        page={page}
        handleClick={handleClick}
      />
      <GridActions
        page={page}
        nextPage={nextPage}
        previousPage={previousPage}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    gridItems: state.main.grid.gridItems,
    rows: state.main.grid.rows,
    columns: state.main.grid.columns,
    voice: state.main.voice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeGrid: layout =>
      dispatch({ type: actionTypes.CHANGE_GRID, layout: layout })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
