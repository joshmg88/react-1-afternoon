import React, { Component } from 'react';


export default class EvenAndOdd extends Component {

    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        };
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    assignEvenAndOdds(userInput) {
        userInput = userInput.split(",")
        let evenArray = [];
        let oddArray = [];
        userInput.forEach(element => element % 2 !== 0 ? oddArray.push(Number(element)) : evenArray.push(Number(element)))



        this.setState({
            evenArray: evenArray,
            oddArray: oddArray
        })
        console.log(evenArray)
    }


    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} />
                <button className="confirmationButton" onClick={() => { this.assignEvenAndOdds(this.state.userInput) }}>Split</button>
                <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
                <h4>Evens and Odds</h4>
            </div>
        )

    }
}