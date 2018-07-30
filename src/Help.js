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
          {this.props.shortcuts
            .filter(shortcut => {
              let commands = shortcut.commands.filter(command => {
                if (
                  command.name
                    .toLowerCase()
                    .indexOf(this.props.filterTerm.toLowerCase()) >= 0
                ) {
                  return true;
                }
              });
              if (commands.length > 0) {
                return true;
              }
            })
            .map((shortcut, index) => (
              <li className="category" key={index}>
                <h2 className="category-name">{shortcut.category}</h2>
                <ul>
                  {shortcut.commands.map((command, index2) => {
                    let keyStyle = {
                      backgroundColor: command.color
                    };
                    let commandStyle = {
                      backgroundColor:
                        this.props.pos == command.position
                          ? command.color
                          : "white"
                    };
                    let tip = this.props.pos == command.position ? "Press intro to expand!":"";

                    return (
                      <li className="command" key={index2}>
                        <a href={command.url} target="_blank">
                          <span className="command-key" style={keyStyle}>
                            {command.key}
                          </span>
                          <span className="command-name" style={commandStyle}>
                            {command.name}
                          </span>
                          <span>
                            <code className="small"> {tip} </code>
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
        </ul>
      </aside>
    );
  }
}

export default Help;
