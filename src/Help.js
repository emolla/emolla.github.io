import React, {Component} from 'react';
import axios from 'axios';
import App from "./App";

class Help extends Component {
    componentDidMount() {
    }
    props = {
        commands: {}
    }
    state = {
        categories: []
    }

    /*
        toggle(show) {
            this._toggled = (typeof show !== 'undefined') ? show : !this._toggled;
            this._toggled ? $.bodyClassAdd('help') : $.bodyClassRemove('help');
        }

        _bindMethods() {
            this._handleKeydown = this._handleKeydown.bind(this);
        }

        _buildAndAppendLists() {
            const lists = document.createElement('ul');
            lists.classList.add('categories');

            this._getCategories().forEach(category => {
                lists.insertAdjacentHTML(
                    'beforeend',
                    `<li class="category">
                <h2 class="category-name">${category}</h2>
                <ul>${this._buildListCommands(category)}</ul>
              </li>`
                );
            });

            this._el.appendChild(lists);
        }

        _buildListCommands(category) {
            return this._commands.map(([cmdCategory, name, key, url]) => {
                if (cmdCategory === category) {
                    return (
                        `<li class="command">
                  <a href="${url}" target="${this._newTab ? '_blank' : '_self'}">
                    <span class="command-key">${key}</span>
                    <span class="comman
                    d-name">${name}</span>
                  </a>
                </li>`
                    );
                }
            }).join('');
        }

        _getCategories() {
            const categories = this._commands
                .map(([category]) => category)
                .filter(category => category);

            return [...new Set(categories)];
        }

        _handleKeydown(e) {
            if ($.key(e) === 'escape') this.toggle(false);
        }

        _registerEvents() {
            document.addEventListener('keydown', this._handleKeydown);
        }
    */
    render() {
        return (
            <aside id="help">
                    <ul className="categories">
                    {
                        this.props.shortcuts.map((shortcut) => (
                            <li class="category">
                                <h2 class="category-name">{shortcut.category}</h2>
                                <ul>
                                    {
                                        shortcut.commands.map((command) => (
                                            <li>
                                                <a href={command.url} target="_blank" >
                                                    <span className="command-key">{command.key}</span>
                                                    <span className="command-name">{command.name}</span>
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                        ))
                    }
                    </ul>
                </aside>
        );
    }
}

export default Help;