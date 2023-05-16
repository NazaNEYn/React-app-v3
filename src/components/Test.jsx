import React, { useState } from "react";

const Test = () => {
  const [firstName, setFirstName] = useState("...");
  const [lastName, setLastName] = useState("");
  const [job, setJob] = useState("...!");

  const changeFirstNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const changeLastNameHandler = (event) => {
    setLastName(event.target.value);
  };
  const changeJobHandler = (event) => {
    setJob(event.target.value);
  };

  return (
    <div className="container text-center">
      <h2>
        My name is {firstName} {lastName} and I'm a {job}
      </h2>
      <div className="input-container text-center">
        <div className="fisrt-name input">
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            onChange={changeFirstNameHandler}
          />
        </div>
        <div className="last-name input">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            onChange={changeLastNameHandler}
          />
        </div>
        <div className="job input">
          <label>Job</label>
          <input
            type="text"
            placeholder="Enter your job"
            onChange={changeJobHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Test;
