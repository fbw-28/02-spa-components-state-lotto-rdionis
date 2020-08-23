import React, { Component } from "react";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Number from "./components/Number";
import "./styles.css";

class App extends Component {
  state = {
    luckyNumbers: [],
    superNumber: null,
  };

  generateRandomNumber = (max) => {
    return Math.floor(Math.random() * max) + 1;
  };

  generateLuckyNumbers = () => {
    this.setState({ superNumber: this.generateRandomNumber(10) });
    const tempArray = [];
    let randomNumber = 0;
    for (let i = 0; i < 6; i++) {
      randomNumber = this.generateRandomNumber(49);
      if (tempArray.includes(randomNumber)) {
        randomNumber = this.generateRandomNumber(49);
        i--;
      } else {
        tempArray.push(randomNumber);
      }
    }

    this.setState({ luckyNumbers: tempArray });
  };

  reset = () => {
    this.setState({
      luckyNumbers: [],
      superNumber: null,
    });
  };

  render() {
    return (
      <main>
        <Header />
        <div className="numbers-container">
          {this.state.luckyNumbers.map((luckyNumber) => {
            return <Number luckyNumber={luckyNumber} />;
          })}
          {this.state.superNumber !== null && (
            <Number
              highlight="highlight" //this is a class that we're creating dynamically and passing as a prop
              luckyNumber={this.state.superNumber}
            />
          )}
        </div>
        <Buttons
          reset={this.reset}
          generateLuckyNumbers={this.generateLuckyNumbers}
        />
      </main>
    );
  }
}

export default App;
