import React from "react";
import "./Calculator.css";

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
    operation: null,
    color: "#343434",
  },
  {
    text: "8",
    operation: null,
    color: "#343434",
  },
  {
    text: "9",
    operation: null,
    color: "#343434",
  },
  {
    text: "x",
    operation: null,
    color: "#d98b0c",
  },
  {
    text: "4",
    operation: null,
    color: "#343434",
  },
  {
    text: "5",
    operation: null,
    color: "#343434",
  },
  {
    text: "6",
    operation: null,
    color: "#343434",
  },
  {
    text: "-",
    operation: null,
    color: "#d98b0c",
  },
];

const CalculatorButton = ({ text, color }) => {
  const styles = {
    backgroundColor: color,
  };
  return (
    <button style={styles} className="calculator__button">
      {text}
    </button>
  );
};

const Calculator = () => {
  return (
    <div className="calculator">
      {BUTTONS.map(button => (
        <CalculatorButton {...button} />
      ))}
    </div>
  );
};

export default Calculator;
