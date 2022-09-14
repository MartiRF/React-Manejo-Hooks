import React from 'react'
import { useConter,useFetch } from '../hooks/'
import { LoadingQuote } from './LoadingQuote';
import { Queto } from './Queto';

export const MultipleCustomHooks = () => {

    const { counter,increment} = useConter(2);
    const { data, hasError, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];

  return (
    <>
        <h1>Breaking-Bad Quotes</h1>
        <hr />

        {
            ( isLoading ) 
                ? ( <LoadingQuote />) 
                : (<Queto author={author} quote={quote} />)
        }

        <button disabled={isLoading} className='btn btn-primary' onClick={() => increment()} >Next quote</button>

    </>
  )
}
