import React, { Component } from "react";
import BuscadorStyle from "./Buscador.css";

class Buscador extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (!this.props.focusOnFilter) {
      this._input.focus();
    }
  }
  render() {
    return (
      <div>
        <p className="center" id="buscador">
          <input
            type="search"
            autofocus={this.props.focusOnFilter}
            value={this.props.searchTerm}
            placeholder="Search"
            onChange={this.props.onChangeSearchTermHandler}
            ref={c => (this._input = c)}
          />
        </p>
      </div>
    );
  }
}

export default Buscador;
