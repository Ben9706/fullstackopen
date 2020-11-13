import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return (
      <div>
        No feedback given.
      </div>
    )
  }

  return (
    <div>
      <Statistic text="all" value={good + neutral + bad} />
      <Statistic text="average" value={(good * 1 + neutral * 0 + bad * (-1)) / (good + neutral + bad)} />
      <Statistic text="positive" value={good / (good + neutral + bad)} />
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistic = ({text, value}) => {
  return (
    <div>
      {text} {value}
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const HandleClickGood = () => setGood(good + 1)
  const HandleClickNeutral = () => setNeutral(neutral + 1)
  const HandleClickBad = () => setBad(bad + 1)

  return (
    <div>
      <h2>give feedback</h2>
      <Button
        handleClick={HandleClickGood}
        text='Good'
      />
      <Button
        handleClick={HandleClickNeutral}
        text='Neutral'
      />
      <Button
        handleClick={HandleClickBad}
        text='Bad'
      />
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)