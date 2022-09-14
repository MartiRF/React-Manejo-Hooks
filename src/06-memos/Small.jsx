import React,{ memo } from 'react'

export const Small = memo(( { valuee } ) => {
  
  
  console.log('me volvi a dibujar :(')
  return (
    <small> { valuee } </small>
  )
})