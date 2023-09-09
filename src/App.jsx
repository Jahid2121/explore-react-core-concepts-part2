import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './user'
import Friends from './friends'


function App() {
  function handleClick(){
    alert('button clicked')
  }

  const handleClick2= ()=>{
    alert('Btn 2')
  }

  const addToFive = (num) => {
    alert(num + 6)
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Team />

    <Users />
    <Friends />

    <Counter />

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => alert('alerting 3')}>Btn 3</button>
      <button onClick={()=> addToFive(5)}>Four</button>
    </>
  )
}

export default App
