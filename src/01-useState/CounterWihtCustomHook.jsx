import React from 'react'
import { useConter } from '../hooks/useCounter'

export const CounterWihtCustomHook = () => {

    const { counter,increment,decrement,reset } = useConter();

  return (
    <div className='container'>
        <h1>Counter wiht Custom Hook: { counter }</h1>

        <hr />

        <div className='botones-row'>
            <button 
                className='btn btn-primary'
                onClick={() => increment(1)}
            >+1</button>
            <button 
                className='btn btn-warning'
                onClick={reset}
            >Reset</button>
            <button 
            className='btn btn-primary'
                onClick={() => decrement(1)}
            >-1</button>
        </div>
    </div>
  )
}
