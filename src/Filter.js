import React, { Component } from "react";
import FilterStyle from "./Filter.css";

class Filter extends Component {
  constructor(props) {
    super();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.focusOnFilter) {
      this._input.focus();
    }
  }

  render() {
    return (
      <div id="filter">
        <input
          type="search"
          autofocus={this.props.focusOnFilter}
          placeholder="engine filter"
          value={this.props.filterTerm}
          onChange={this.props.onChangeFilterTermHandler}
          ref={c => (this._input = c)}
        />
      </div>
    );
  }
}

export default Filter;
