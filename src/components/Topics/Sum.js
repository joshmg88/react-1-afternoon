import React, { Component } from "react";

export default class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };
  }

  updateNumber1(val) {
    this.setState({ number1: parseInt(val, 10) });
  }

  updateNumber2(val) {
    this.setState({ number2: parseInt(val, 10) });
  }
  sumUp(num1, num2) {
    this.setState({ sum: num1 + num2 });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <input
          className="inputLine"
          type="number"
          onChange={e => this.updateNumber1(e.target.value)}
        />
        <input
          className="inputLine"
          type="number"
          onChange={e => this.updateNumber2(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.sumUp(this.state.number1, this.state.number2)}
        >
          Sum
        </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
        <h4>Sum</h4>
      </div>
    );
  }
}
