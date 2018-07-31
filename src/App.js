import React, { Component } from "react";
import logo from "./logo.svg";
import Help from "./Help";
import Buscador from "./Buscador";
import AppStyle from "./App.css";
import Clock from "./Clock";
import Filter from "./Filter";

const CONFIG = {
  shortcuts: [
    {
      name: "Google",
      category: "Search",
      key: "*",
      url: "https://www.google.com",
      path: "/search?q={}",
      color: "#111"
    },
    {
      name: "Duckduckgo",
      category: "Search",
      key: "s",
      url: "https://duckduckgo.com/",
      path: "/search?q={}&ia=meanings",
      color: "#222"
    },
    {
      name: "Google translate",
      category: "translator",
      key: "t",
      url: "https://translate.google.es",
      path: "/?um=1&ie=UTF-8&hl=es&client=tw-ob#en/es/{}",
      color: "#1da1f2"
    },
    {
      name: "Linguee",
      category: "translator",
      key: "l",
      url: "https://www.linguee.es",
      path: "/espanol-ingles/search?source=auto&query={}",
      color: "#1df1f2"
    },
    {
      name: "GitHub",
      category: "Developing",
      key: "g",
      url: "https://github.com/emolla",
      path: "/search?utf8=✓&q={}&type=",
      color: "#333"
    },
    {
      name: "Gmail Inbox",
      category: "Mail",
      key: "i",
      url: "https://www.google.com",
      path: "/search/{}",
      color: "#4285f4"
    },
    {
      name: "BBCNews",
      category: "News",
      key: "b",
      url: "https://bbc.co.uk/news",
      path: "/search?q={}",
      color: "#da552f"
    },
    {
      name: "Ivoox",
      category: "Listen",
      key: "x",
      url: "https://ivoox.com",
      path: "/{}_sb.html",
      color: "#ff8800"
    },
    {
      name: "Linkedin",
      category: "Jobs",
      key: "l",
      url: "https://www.linkedin.com",
      path: "/in/enrique-moll%C3%A1/",
      color: "#9cb443"
    },
    {
      name: "YouTube",
      category: "Watch",
      key: "y",
      url: "https://youtube.com/feed/subscriptions",
      path: "/results?search_query={}",
      color: "#cd201f"
    },
    {
      name: "KeyCode",
      category: "Programming",
      key: "k",
      url: "http://keycode.info/",
      path: "",
      color: "#cdffff"
    }
  ],
  // give suggestions as you type
  suggestions: true,

  // max amount of suggestions that will ever be displayed
  suggestionsLimit: 5,

  // the order and limit for each suggestion influencer
  // "Default" suggestions come from CONFIG.defaultSuggestions
  // "DuckDuckGo" suggestions come from the duck duck go search api
  // "History" suggestions come from your previously entered queries
  influencers: [
    { name: "Default", limit: 5 },
    { name: "History", limit: 2 },
    { name: "DuckDuckGo", limit: 5 }
  ],

  // default search suggestions for the specified queries
  defaultSuggestions: {
    l: ["l/in/enrique-mollá/"],
    x: ["x:"],
    t: ["t:"],
    tl: ["t:"]
  },

  // instantly redirect when a key is matched
  // put a space before any other queries to prevent unwanted redirects
  instantRedirect: false,

  // open queries in a new tab
  newTab: true,

  // dynamic background colors when command domains are matched
  colors: true,

  // the delimiter between the key and your search query
  // e.g. to search GitHub for potatoes you'd type "g:potatoes"
  searchDelimiter: ":",

  // the delimiter between the key and a path
  // e.g. type "r/r/unixporn" to go to "reddit.com/r/unixporn"
  pathDelimiter: "/",

  // the delimiter between the hours and minutes in the clock
  clockDelimiter: ":"

  // note: you can pass in your search query via the q query param
  // e.g. going to file:///path/to/tilde/index.html?q=hamsters is equivalent
  // to typing "hamsters" and pressing enter
};

const ESCAPE_KEY = 27;
const TAB_KEY = 9;
const SHIFT_KEY = 16;
const INTRO_KEY = 13;

class App extends Component {
  constructor() {
    super();
    this.state.shortcuts = CONFIG.shortcuts;
    this.state.pos = 0;
    this.state.focusOnFilter = true;
  }

  onKeyDown = event => {
    switch (event.keyCode) {
      case ESCAPE_KEY:
        this.setState({
          pos: -1,
          filterTerm: "",
          searchTerm: ""
        });
        break;
      case TAB_KEY:
        event.preventDefault();
        this.setState({
          pos:
            this.state.pos >= this.state.shortcuts.length - 1
              ? 0
              : this.state.pos + 1
        });
        break;
      case INTRO_KEY:
        event.preventDefault();
        if (this.state.searchTerm.length > 0) {
          this.doSearch();
        }
        break;
        case SHIFT_KEY:
        event.preventDefault();
        this.setState({focusOnFilter: !this.state.focusOnFilter});
        break;
      default:
        break;
    }
  };
  doSearch = () => {
    let path = this.state.shortcuts[this.state.pos].path.replace(
      "{}",
      this.state.searchTerm
    );
    window.open(this.state.shortcuts[this.state.pos].url + path, "_blank");
  };
  onChangeFilterTermHandler = event => {
    this.setState({ pos: 0, filterTerm: event.target.value });
    this.filterShortcuts(event.target.value);
  };

  onChangeSearchTermHandler = event => {
    this.setState({ pos: 0, searchTerm: event.target.value });
  };

  componentWillMount = () => {
    document.addEventListener("keydown", this.onKeyDown);
  };

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.onKeyDown);
  };

  state = {
    shortcuts: [],
    pos: 0,
    filterTerm: "",
    searchTerm: ""
  };

  filterShortcuts = filterTerm => {
    this.setState({
      shortcuts: CONFIG.shortcuts.filter(shortcut => {
        if (
          shortcut.name.toLowerCase().indexOf(filterTerm.toLowerCase()) >= 0
        ) {
          return true;
        }
      })
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Emolla</h1>
          <Filter
            focusOnFilter={this.state.focusOnFilter}
            shortcuts={this.state.shortcuts}
            onChangeFilterTermHandler={this.onChangeFilterTermHandler}
          />
        </header>
        <div className="App-intro center">
          <Help
            pos={this.state.pos}
            filterTerm={this.state.filterTerm}
            shortcuts={this.state.shortcuts}
          />
          <Clock />
        </div>
        <div>
          <Buscador
            focusOnFilter={this.state.focusOnFilter}
            pos={this.state.pos}
            searchTerm={this.state.searchTerm}
            onChangeSearchTermHandler={this.onChangeSearchTermHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
