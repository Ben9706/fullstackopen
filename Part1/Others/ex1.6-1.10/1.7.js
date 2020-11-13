import React,{useState} from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good+neutral+bad}</p>
      <p>average {(good*1+neutral*0+bad*(-1))/(good+neutral+bad)}</p>
      <p>positive {good/(good+neutral+bad)}%</p>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)