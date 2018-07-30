import React, { Component } from "react";
import BuscadorStyle from "./Buscador.css";

class Buscador extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
          <h2>{this.props.currentShortcut.name}</h2>
        <p className="center" id="buscador">
            {this.props.currentShortcut.name}
        </p>
      </div>
    );
  }
}

export default Buscador;
