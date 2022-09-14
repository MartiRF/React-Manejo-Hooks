import React, { useState } from 'react'

export const CounterApp = () => {
  const [state, setCounter] = useState({
    counter:10,
    counter2:20,
    counter3:30,
  })

  const { counter,counter2,counter3 } = state;

  return (
    <>
      <h1>Counter: { counter }</h1>
      <h1>Counter: { counter2 }</h1>
      <h1>Counter: { counter3 }</h1>
      
      <hr />

      <button 
        onClick={ () => setCounter({...state, counter: counter + 1,}) }
        className='btn btn-outline-primary'
        >+1</button>
    </>
  )
}
