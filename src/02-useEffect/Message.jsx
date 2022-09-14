import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coord, setCoord] = useState({ x:0, y:0 })
    const { x,y } = coord;

    useEffect(() => {
    //   console.log('Message Mounted')

    const onMauseMove = ({x,y}) => {
        const cooords = {x,y}
        setCoord({x,y})
        // console.log(cooords)
        // console.log(':)')
    }

    window.addEventListener('mousemove',onMauseMove)
    
      return () => {
        // console.log('Message Unmounted')
        window.removeEventListener('mousemove',onMauseMove)
      }
    }, [])
    
  return (
    <>
        <h3>Usuario ya existe</h3>
        <p>X: {x}, Y: {y}</p>
        {/* Mostrar Objetos en el DOM */}
        {JSON.stringify(coord)}
    </>
    )
}
