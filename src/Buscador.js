import React, { Component } from "react";
import BuscadorStyle from "./Buscador.css";

class Buscador extends Component {
  render() {
    return (
      <div>
        <p className="center" id="buscador">
          <input
            type="search"
            value={this.props.searchTerm}
            placeholder="Search"
            onChange={this.props.onChangeSearchTermHandler}
          />
        </p>
      </div>
    );
  }
}

export default Buscador;
