import React from "react";
import Student from "../Student";
import Social from "../Social";
import Calculator from "../Calculator";
import students from "../../data/db";

console.log(students);

const App = () => {
  return (
    <div>
      <div className="app--wrapper">
        <Calculator />
      </div>
      {/* <div className="app--wrapper">
        <h1>Hello World... again...</h1>

        {students.map(student => (
          <Student {...student} />
        ))}
      </div>
      <div className="app--wrapper">
        <Social />
      </div> */}
    </div>
  );
};

export default App;
