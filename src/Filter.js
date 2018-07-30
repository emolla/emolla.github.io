import React, { Component } from "react";
import FilterStyle from "./Filter.css";

class Filter extends Component {
  render() {
    return (
      <div id="filter">
        <input
          type="search"
          placeholder="engine filter"
          value={this.props.searchTerm}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default Filter;
