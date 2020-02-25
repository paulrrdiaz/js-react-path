import React from "react";
import CalculatorButton from "./CalculatorButton";
import isNumber from "lodash/isNumber";
import isString from "lodash/isString";
import isNull from "lodash/isNull";

const BUTTONS = [
  {
    text: "AC",
    operation: null,
    color: "#a5a5a5",
  },
  {
    text: "+/-",
    operation: null,
    color: "#a5a5a5",
  },
  {
    text: "%",
    operation: null,
    color: "#a5a5a5",
  },
  {
    text: "/",
    operation: "/",
    color: "#d98b0c",
  },
  {
    text: "7",
    operation: 7,
    color: "#343434",
  },
  {
    text: "8",
    operation: 8,
    color: "#343434",
  },
  {
    text: "9",
    operation: 9,
    color: "#343434",
  },
  {
    text: "x",
    operation: "*",
    color: "#d98b0c",
  },
  {
    text: "4",
    operation: 4,
    color: "#343434",
  },
  {
    text: "5",
    operation: 5,
    color: "#343434",
  },
  {
    text: "6",
    operation: 6,
    color: "#343434",
  },
  {
    text: "-",
    operation: "-",
    color: "#d98b0c",
  },
  {
    text: "1",
    operation: 1,
    color: "#343434",
  },
  {
    text: "2",
    operation: 2,
    color: "#343434",
  },
  {
    text: "3",
    operation: 3,
    color: "#343434",
  },
  {
    text: "+",
    operation: "+",
    color: "#d98b0c",
  },
  {
    text: "0",
    operation: 0,
    color: "#343434",
    big: true,
  },
  {
    text: ".",
    operation: null,
    color: "#343434",
  },
  {
    text: "=",
    operation: null,
    color: "#d98b0c",
  },
];

class Calculator extends React.Component {
  state = {
    prompt: 0,
    previousPrompt: 0,
    hold: null,
  };

  evaluate = operation => {
    const { prompt, previousPrompt, hold } = this.state;
    console.log(this.state);

    if (isString(hold)) {
      this.setState({
        previousPrompt: prompt,
      });
    }

    if (isNumber(operation)) {
      this.setState(prevState => ({
        prompt:
          isString(hold) || prevState.prompt === 0
            ? operation
            : Number(`${prevState.prompt}${operation}`),
      }));
    }

    if (isString(operation)) {
      this.setState({
        hold: operation,
      });
    }

    if (isNull(operation)) {
      const result = eval(`${previousPrompt} ${hold} ${prompt}`);
      this.setState({
        prompt: result,
      });
    }
  };

  render() {
    const { prompt } = this.state;

    return (
      <div className="calculator">
        <div className="calculator__prompt">
          <div className="calculator__prompt__result">{prompt}</div>
        </div>
        <div className="calculator__buttons">
          {BUTTONS.map((button, index) => (
            <CalculatorButton evaluate={this.evaluate} key={`button-${index + 1}`} {...button} />
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
