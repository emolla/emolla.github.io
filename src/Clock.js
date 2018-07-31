import React, { Component } from "react";
import ClockStyle from "./Clock.css";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = this.getTime();
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  getTime = () => {
    let date = new Date();

    return {
      time: date.toLocaleString(),
      hours: date.getHours() > 9 ? date.getHours() : "0" + date.getHours(),
      minutes:
        date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes(),
      seconds:
        date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds(),
      day: date.getDay() > 9 ? date.getDay() : "0" + date.getDay(),
      month: date.getMonth() + 1,
      year: date.getFullYear()
    };
  };
  tick() {
    this.setState(this.getTime());
  }
  render() {
    return (
      <div>
        <time id="clock">
          <strong>{this.state.hours}</strong>:{this.state.minutes}{" "}
          <span className="seconds">{this.state.seconds}</span>
        </time>
        <span className="date">
          {this.state.day}/{this.state.month}/{this.state.year}
        </span>
      </div>
    );
  }
}

export default Clock;
