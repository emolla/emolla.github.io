import React, { Component } from "react";
import FilterStyle from "./Filter.css";

class Filter extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div id="filter">
        {Object.keys(this.props.currentShortcut).length !== 0 ? (
          <h2>{this.props.currentShortcut.name}</h2>
        ) : (
          <input
            type="search"
            placeholder="engine filter"
            value={this.props.filterTerm}
            onChange={this.props.onChangeFilterTermHandler}
          />
        )}
      </div>
    );
  }
}

export default Filter;
