import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [currentSavings, setCurrentSavings] = useState(10000);
  const [yearlyContribution, setYearlyContribution] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(7);
  const [duration, setDuration] = useState(5);

  const submitHandler = (event) => {
    event.preventDefault();
    props.formHandler({
      "current-savings": currentSavings,
      "yearly-contribution": yearlyContribution,
      "expected-return": expectedReturn,
      "duration": duration
    });
  };

  const resetHandler = () => {
    setCurrentSavings(10000);
    setYearlyContribution(1200);
    setExpectedReturn(7);
    setDuration(5);
  };

  const inputChangeHandler = (input, value) => {
    if (input === "current-savings") {
      setCurrentSavings(value);
      return;
    }
    if (input === "yearly-contribution") {
      setYearlyContribution(value);
      return;
    }
    if (input === "expected-return") {
      setExpectedReturn(value);
      return;
    }
    if (input === "duration") {
      setDuration(value);
      return;
    }
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) => {
              inputChangeHandler("current-savings", event.target.value);
            }}
            value={currentSavings}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) => {
              inputChangeHandler("yearly-contribution", event.target.value);
            }}
            value={yearlyContribution}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) => {
              inputChangeHandler("expected-return", event.target.value);
            }}
            value={expectedReturn}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => {
              inputChangeHandler("duration", event.target.value);
            }}
            value={duration}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
