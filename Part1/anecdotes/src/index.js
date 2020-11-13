import React,{useState} from 'react';
import ReactDOM from 'react-dom';

const MostVoted = ({ votes }) => {
  const maxVotesQty = Math.max(...votes);
  const mostVoted = votes.indexOf(maxVotesQty);

  return (
      <p>
          {anecdotes[mostVoted]}
          <br />
          has {maxVotesQty} votes
      </p>
  )
}

const App = (props) => {
  const [selected,setSelected]=useState(0)

  const [votes, setVotes] = useState(new Array(6).fill(0))

  const handleNextClick = () => {
    const value = Math.floor(Math.random()*6);
    setSelected(value);
  }

  //计数，添加到数组中
  const handleVoteClick = () => {
    const newsVotes = [...votes]
    newsVotes[selected] += 1;
    setVotes(newsVotes);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br></br>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVoteClick} >vote</button>
      <button onClick={handleNextClick} >next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <MostVoted votes={votes} />
      
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes}  />
  </React.StrictMode>,
  document.getElementById('root')
);