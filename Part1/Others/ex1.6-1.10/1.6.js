import React,{useState} from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good,goodIncrease] = useState(0)
  const [neutral,neutralIncrease] = useState(0)
  const [bad,badIncrease] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => goodIncrease(good + 1)}>
        good
      </button>
      <button onClick={() => neutralIncrease(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => badIncrease(bad + 1)}>
        bad
      </button>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)