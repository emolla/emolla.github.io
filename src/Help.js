import React, { Component } from "react";
import HelpStyle from "./Help.css";

class Help extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <aside id="help">
        <ul className="categories">
          {this.props.shortcuts.map((shortcut, index) => (
            <li className="category" key={index + "-" + shortcut.category}>
              <h2 className="category-name">{shortcut.category}</h2>
              <ul>
                <li className="command" key={index}>
                  <a href={shortcut.url} target="_blank">
                    <span
                      className={index === this.props.pos ? 'command-key current':'command-key'}
                      style={{
                        backgroundColor: shortcut.color
                      }}
                    >
                      {shortcut.key}
                    </span>
                    <span
                      className={index === this.props.pos ? 'command-name current':'command-name'}
                      style={{
                        backgroundColor:
                          this.props.pos === shortcut.position
                            ? shortcut.color
                            : "white"
                      }}
                    >
                      {shortcut.name}
                    </span>
                    <span>
                      <code className="small">
                        {" "}
                        {this.props.pos === shortcut.position
                          ? "Press intro to expand!"
                          : ""}{" "}
                      </code>
                    </span>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}

export default Help;
