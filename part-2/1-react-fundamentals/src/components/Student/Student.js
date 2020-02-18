import React from "react";

const Student = props => {
  const { name, background, email } = props;
  return (
    <div className="student">
      <h3>{name}</h3>
      <p>{background || "No title"}</p>
      <span>{email || "No email"}</span>
    </div>
  );
};

export default Student;
