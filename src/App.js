import React, {Component} from 'react';
import logo from './logo.svg';
import Help from './Help';
import Buscador from "./Buscador";
import AppStyle from './App.css'
import Clock from "./Clock";

const CONFIG = {
    // the category, name, key, url, search path and color
    // if none of the specified keys are matched, the '*' key is used
    shortcuts: [
        {
            category: 'Search',
            commands: [
                {
                    name: 'Google',
                    key: '*',
                    url: 'https://www.google.com',
                    path: '/search?q={}',
                    color: '#111'
                },
                {
                    name: 'Duckduckgo',
                    key: 's',
                    url: 'https://duckduckgo.com/',
                    path: '/search?q={}&ia=meanings',
                    color: '#222'
                },
            ]

        },
        {
            category: 'translator',
            commands: [
                {
                    name: 'Google translate',
                    key: 'tg',
                    url: 'https://translate.google.es',
                    path: '/?um=1&ie=UTF-8&hl=es&client=tw-ob#en/es/{}',
                    color: '#1da1f2'
                },
                {
                    name: 'Linguee',
                    key: 'tl',
                    url: 'https://www.linguee.es',
                    path: '/espanol-ingles/search?source=auto&query={}',
                    color: '#1df1f2'
                }
            ]

        },
        {
            category: 'Developing',
            commands: [
                {
                    name: 'GitHub',
                    key: 'g',
                    url: 'https://github.com/emolla',
                    path: '/search?utf8=✓&q={}&type=',
                    color: '#333'
                },
            ]

        },
        {
            category: 'Mail',
            commands: [
                {
                    name: 'Gmail Inbox',
                    key: 'i',
                    url: 'https://www.google.com',
                    path: '/search/{}',
                    color: '#4285f4'
                },
            ]

        },
        {
            category: 'News',
            commands: [
                {
                    name: 'BBCNews',
                    key: 'b',
                    url: 'https://bbc.co.uk/news',
                    path: '/search?q={}',
                    color: '#da552f'
                },
            ]

        },
        {
            category: 'Listen',
            commands: [
                {
                    name: 'Ivoox',
                    key: 'x',
                    url: 'https://ivoox.com',
                    path: '/{}_sb.html',
                    color: '#ff8800'
                },
            ]

        },
        {
            category: 'Jobs',
            commands: [
                {
                    name: 'Linkedin',
                    key: 'l',
                    url: 'https://www.linkedin.com',
                    path: '/in/enrique-moll%C3%A1/',
                    color: '#9cb443'
                },
            ]

        },
        {
            category: 'Watch',
            commands: [
                {
                    name: 'YouTube',
                    key: 'y',
                    url: 'https://youtube.com/feed/subscriptions',
                    path: '/results?search_query={}',
                    color: '#cd201f'
                },
            ]

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
        {name: 'Default', limit: 5},
        {name: 'History', limit: 2},
        {name: 'DuckDuckGo', limit: 5},
    ],

    // default search suggestions for the specified queries
    defaultSuggestions: {
        'l': ['l/in/enrique-mollá/'],
        'x': ['x:'],
        't': ['t:'],
        'tl': ['t:'],
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
    searchDelimiter: ':',

    // the delimiter between the key and a path
    // e.g. type "r/r/unixporn" to go to "reddit.com/r/unixporn"
    pathDelimiter: '/',

    // the delimiter between the hours and minutes in the clock
    clockDelimiter: ':',

    // note: you can pass in your search query via the q query param
    // e.g. going to file:///path/to/tilde/index.html?q=hamsters is equivalent
    // to typing "hamsters" and pressing enter
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Emolla homepage</h1>
                </header>
                <div className="App-intro center">
                    <Help shortcuts={CONFIG.shortcuts}/>
                    <Clock time="1:22" date="28/12/345"/>
                </div>
            </div>
        );
    }
}

export default App;
