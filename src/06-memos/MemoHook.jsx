import React, { useMemo, useState } from 'react'
import { useConter } from '../hooks'

const heavyStuff = (iteratNymber = 100 ) => {
  for (let i = 0; i < iteratNymber; i++) {
    console.log('Ahi vamos')
  }
  return `${iteratNymber} iteraciones realizadas`
}

export const MemoHook = () => {

    const { counter,increment } = useConter(2000)
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo( () => heavyStuff(counter), [counter] )

  return (
    <>
        <h1>Counter: <small>{counter}</small> </h1>
        <hr />
        <h4>{ memorizedValue }</h4>
        <button onClick={() => increment()}>+1</button>
        <button onClick={() => setShow(!show)}>Show/Hide { JSON.stringify(show) }</button>
    </>

  );
  }