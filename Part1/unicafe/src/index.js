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
    <table>
      <Statistic text="all" value={good + neutral + bad} />
      <Statistic text="average" value={(good * 1 + neutral * 0 + bad * (-1)) / (good + neutral + bad)} />
      <Statistic text="positive" value={good / (good + neutral + bad)} />
    </table>
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
    <tbody>
      <tr>
        <td>
          {text}
        </td>
        <td>
          {value}
        </td>
      </tr>
    </tbody>
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
      <table>
        <tr>
          <td>
            good
          </td>
          <td>
            {good}
          </td>
        </tr>
        <tr>
          <td>
            neutral
          </td>
          <td>
            {neutral}
          </td>
        </tr>
        <tr>
          <td>
            bad
          </td>
          <td>
            {bad}
          </td>
        </tr>
      </table>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)