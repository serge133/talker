import React, { Component } from "react";
import classes from "./Dropdown.css";
import PropTypes from "prop-types";

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false
    };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div
        className={classes.dropdown}
        style={{
          ...this.props.style
        }}
        onClick={this.showDropdownMenu}
      >
        <div className={classes.button}>{this.props.name}</div>

        {this.state.displayMenu ? <ul>{this.props.children}</ul> : null}
      </div>
    );
  }
}

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired
};

export default Dropdown;
