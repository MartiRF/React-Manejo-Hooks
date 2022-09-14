import React, { useState } from 'react'
import { useConter } from '../hooks/'
import { Small } from './Small';

export const Memorize = () => {
    const { counter,increment } = useConter(10)
    const [show, setShow] = useState(true)

  return (
    <>
        <h1>Counter: <Small valuee={counter} /> </h1>
        <hr />

        <button onClick={() => increment()}>+1</button>
        <button onClick={() => setShow(!show)}>Show/Hide { JSON.stringify(show) }</button>
    </>

  );
  }