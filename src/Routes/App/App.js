import React, { useState } from "react";
import classes from "./App.css";
import * as actionTypes from "../../store/actionTypes";
import { connect } from "react-redux";
import ActionGrid from "../../Containers/ActionGrid/ActionGrid";
import Dropdown from "../../Components/Dropdown/Dropdown";
import GridActions from "../../Components/GridActions/GridActions";
import OutputField from "../../Containers/OutputField/OutputField";
import { textToSpeech } from "../../Functions/TextToSpeach";

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
    if (page - 1 < 0) return;
    newPageNum = page - 1;
    setPage(newPageNum);
  };

  const changeGridSizeAndResetPage = (rows, columns) => {
    setPage(0);
    props.changeGridSize(rows, columns);
  };

  const handleClick = gridItem => {
    textToSpeech(gridItem.msg);
    setOutputField(outputField.concat(gridItem));
  };

  const clearOutputField = () => setOutputField([]);

  return (
    <div className={classes.App}>
      <Dropdown
        color="#474747"
        name={`${props.rows} rows, ${props.columns} columns`}
        style={{ position: "fixed", right: 0 }}
      >
        <li onClick={() => changeGridSizeAndResetPage(2, 2)}>2 x 2</li>
        <li onClick={() => changeGridSizeAndResetPage(2, 3)}>2 x 3</li>
        <li onClick={() => changeGridSizeAndResetPage(3, 3)}>3 x 3</li>
        <li onClick={() => changeGridSizeAndResetPage(5, 5)}>5 x 5</li>
        <li onClick={() => changeGridSizeAndResetPage(5, 8)}>5 x 8</li>
      </Dropdown>
      <OutputField field={outputField} clearField={clearOutputField} />
      <ActionGrid
        rows={props.rows}
        columns={props.columns}
        gridItems={props.gridItems}
        page={page}
        handleClick={handleClick}
      />
      <GridActions nextPage={nextPage} previousPage={previousPage} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    gridItems: state.main.grid.gridItems,
    rows: state.main.grid.rows,
    columns: state.main.grid.columns
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeGridSize: (rows, columns) =>
      dispatch({
        type: actionTypes.CHANGE_GRID_SIZE,
        rows: rows,
        columns: columns
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
