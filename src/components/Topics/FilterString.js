import React, { Component } from "react";

export default class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      name: ["hello", "dog", "goodmorning"],
      userInput: "",
      filteredArray: []
    };
  }
  handleChange(val) {
    this.setState({ userInput: val });
  }
  filterArray(userInput) {
    var filtered = this.state.name;
    var filteredArray = [];
    for (let i = 0; i < filtered.length; i++) {
      if (filtered[i].includes(userInput)) {
        filteredArray.push(filtered[i]);
      }
    }
    this.setState({ filteredArray: filteredArray });
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <span className="puzzleText">
          {" "}
          Names: {JSON.stringify(this.state.name, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterArray(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Names: {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
        <h4> Filter String</h4>
      </div>
    );
  }
}
