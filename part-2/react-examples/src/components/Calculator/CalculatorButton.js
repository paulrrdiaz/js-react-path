import React from "react";
import styles from "components/Calculator/CalculatorButton.module.css";

const CalculatorButton = props => {
  const { text, operation, color, big, evaluate } = props;
  const style = {
    backgroundColor: color,
    color: color === "#a5a5a5" ? "black" : "white",
  };
  return (
    <button
      onClick={() => evaluate(operation)}
      style={style}
      className={`${styles.button} ${big && styles.buttonBig}`}
    >
      {text}
    </button>
  );
};

export default CalculatorButton;
