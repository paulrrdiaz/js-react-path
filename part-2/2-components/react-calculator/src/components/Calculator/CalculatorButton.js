import React from "react";

const CalculatorButton = props => {
  const { text, operation, color, big, evaluate } = props;
  const styles = {
    backgroundColor: color,
    color: color === "#a5a5a5" ? "black" : "white",
  };
  return (
    <button
      onClick={() => evaluate(operation)}
      style={styles}
      className={`calculator__button ${big && "calculator__button--big"}`}
    >
      {text}
    </button>
  );
};

export default CalculatorButton;
