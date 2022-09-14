import React from 'react'

export const ShowIncrement = ({ increment }) => {
    console.log('Me volci a generar')
  return (
    <button
        onClick={() => {
            increment();
        }}
    >
        Incrementar
    </button>
  )
}
