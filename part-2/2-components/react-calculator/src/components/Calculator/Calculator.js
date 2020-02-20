import React from "react";
import CalculatorButton from "./CalculatorButton";
import isNumber from "lodash/isNumber";

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
    operation: null,
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
    operation: null,
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
    operation: null,
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
    operation: null,
    color: "#d98b0c",
  },
  {
    text: "0",
    operation: null,
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

// const Calculator = () => {
//   return (
//     <div className="calculator">
//       <div className="calculator__prompt">
//         <div className="calculator__prompt__result">123</div>
//       </div>
//       <div className="calculator__buttons">
//         {BUTTONS.map((button, index) => (
//           <CalculatorButton key={`button-${index + 1}`} {...button} />
//         ))}
//       </div>
//     </div>
//   );
// };

class Calculator extends React.Component {
  state = {
    prompt: 0,
  };

  evaluate = operation => {
    if (isNumber(operation)) {
      this.setState(prevState => ({
        prompt: prevState.prompt === 0 ? operation : Number(`${prevState.prompt}${operation}`),
      }));
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
