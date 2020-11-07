import React from 'react'
import ReactDOM from 'react-dom'

const Course = () => {
  return (
    <>
      <p>Half Stack application development</p>
    </>
  )
}


const Part1 = () => {
  const exercises1=10
  return (
    <>
      <p>Fundamentals of React {exercises1}</p>
    </>
  )
}

const Part2 = () => {
  const exercises2=7
  return (
    <>
      <p>Using props to pass data {exercises2}</p>
    </>
  )
}

const Part3 = () => {
  const exercises3=14
  return (
    <>
      <p>State of a component {exercises3}</p>
    </>
  )
}

const Header =()=>{
  return(
    <>
      <h1><Course /></h1>
    </>
  )
}

const Content =()=>{
  return(
    <>
      <Part1 />
      <Part2 />
      <Part3 />
    </>
  )
}

const Total =()=>{
  const exercises1=10
  const exercises2=7
  const exercises3=14
  return(
    <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  )
}

const App =()=> {

  return (
    <>
      <Header />
      <Content />
      <Total />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))