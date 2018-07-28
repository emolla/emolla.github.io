import React, { Component } from 'react';
import ClockStyle from './Clock.css'

class Clock extends Component{
    props = {
        time: {},
        date: {}
    }
    render() {
        return(
            <time id="clock">
                {this.props.time}
                <span className="date">{this.props.date}</span>
            </time>
        );
    }
}

export default Clock;