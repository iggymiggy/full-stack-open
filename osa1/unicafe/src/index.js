import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => {
  console.log(onClick);
  return <button onClick={onClick}>{text}</button>;
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  console.log(good);
  console.log(neutral);
  console.log(bad);

  const countAll = () => {
    return good + neutral + bad;
  };

  const average = () => {
    return (good * 1 + neutral * 0 + bad * -1) / countAll();
  };

  const countPositive = () => {
    return (good / countAll()) * 100 + "%";
  };

  if (countAll() === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <table>
      <tbody>
        <Statistic text="good" value={good}></Statistic>
        <Statistic text="neutral" value={neutral}></Statistic>
        <Statistic text="bad" value={bad}></Statistic>
        <Statistic text="all" value={countAll()}></Statistic>
        <Statistic text="average" value={average()}></Statistic>
        <Statistic text="positive" value={countPositive()}></Statistic>
      </tbody>
    </table>
  );
};

const App = props => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h3>Give feedback</h3>
      <div>
        <Button onClick={handleGoodClick} text="good"></Button>
        <Button onClick={handleNeutralClick} text="neutral"></Button>
        <Button onClick={handleBadClick} text="bad"></Button>
      </div>
      <h3>Statistics</h3>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
