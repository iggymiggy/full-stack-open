import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = props => {
  const randomAnecdoteIdx = () => {
    return Math.floor(Math.random() * anecdotes.length);
  };

  const [selected, setSelected] = useState(randomAnecdoteIdx());
  const [votes, setVotes] = useState(
    Array.apply(null, new Array(anecdotes.length)).map(
      Number.prototype.valueOf,
      0
    )
  );

  const handleAnecdoteClick = () => {
    setSelected(randomAnecdoteIdx());
  };

  const handleVoteClick = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  const anecdoteWithMostVotes = () => {
    if (Math.max.apply(Math, votes) !== 0) {
      return anecdotes[votes.indexOf(Math.max(...votes))];
    }
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <div>{props.anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button onClick={handleAnecdoteClick} text="next anecdote"></Button>
      <Button onClick={handleVoteClick} text="vote"></Button>
      <h2>Anecdote with most votes</h2>
      <div>{anecdoteWithMostVotes()}</div>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));