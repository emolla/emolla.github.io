import React, { Component } from "react";
import FilterStyle from "./Filter.css";
import Clock from "./Clock";

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
        <div className="left">
          <input
            type="search"
            autoFocus={this.props.focusOnFilter}
            placeholder="engine"
            value={this.props.filterTerm}
            onChange={this.props.onChangeFilterTermHandler}
            ref={c => (this._input = c)}
          />
        </div>
        <div className="right">
          <Clock />
        </div>
      </div>
    );
  }
}

export default Filter;
