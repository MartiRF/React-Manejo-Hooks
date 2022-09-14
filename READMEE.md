# Manejo de Hooks en React
Durante en esta leccion se vieron los diferentes hooks generales que existen en react del curso de Fernando Herrera. 

| Hooks  |
|--------|
|[useState](#useState)|
|[useEffect](#useEffect)|
|[useRef](#useRef)|
|[Memo](#MEMO)|
|[Reducer](#useReducer)|

<div id='useState' />

## useState
el useState es hook mas comun al utilizar react, se usa para manejar estados y poder renderizar en el DOM.
~~~
import { useState } from 'react'

const [ valor, setValor ] = useState(0)
~~~
useState tiene dos argumentos, el primero devuelve el valor actual de estado, el "setValor" es una funcion que asigna el nuevo valor.
~~~
setValor(20)
console.log(valor)
//20
~~~
<div id='useEffect' />

## useEffect

El useEffect es un hook que nos permite ejecutar funciones, lo especial de este hook es que dependiendo si se le mandan depencencias o no esta se ejecuta:
~~~
useEffect( () => {

}, [])
~~~
Esta es la forma basica de ejecucar el useEffect despues de rendereziar el componente, si queremos que se ejecute cada vez que un state cambie, solo tenemos que agregarlo a la dependencia.

~~~
useEffect( () => {

}, [nombre]
~~~
Otra utulidad de useEffect es el de poder desmontar componentes. utilizando el return
~~~
useEffect( () => {

    return () => {

    }
}, [])
~~~

<div id='useRef' />

## useRef

Hace una referencia en memoria al que apunta
~~~
const inputRef = useRef()
    <input 
        ref={ inputRef }
        type="text"
        placeholder='Ingresa su nombre'
        className='form-control'
    />
~~~

<div id='MEMO' />

## useMemo o MEMO 

Memoriza un componente para optimizar el rendimineto. si tenemos un proceso pesado no queresmos que se llame cada vez que se actuliza un state en react. 
Aprendi dos formas en la que se utiliza.
~~~
import React from 'react'

export const Small = React.memo(( { valuee } ) => {
  return (
    <small> { valuee } </small>
  )
})
~~~
Utilizamos el React.memo y envolmemos el componente a memorizar,
Despues tenemos al hookMemo:
~~~
import { useMemo } from 'react';

    const memorizedValue = useMemo( () => heavyStuff(counter), [counter] )
~~~

<div id='useReducer' />

## useReducer (clase #138)
 Que es un reducer?

 Es una funcion que es pura y no puede asincrona:
  1. Es una funcion comun y corriente
  2. Debe ser una funcion pura
  3. Debe retornar un nuevo estado
  4. Usualmente solo recibe dos argumentos

  ~~~
  const todoReducer = () => {

  }
  ~~~
  Cosas que no debe de tener:
  1. No debe de tener efectos secundario
  2. No debe de realizar tareas asincronas
  3. Debe de retornar simpre un estado nuevo
  4. No debe de llamar localStorage o sessionStorage(Son considerados efectos secundarios)
  5. No debe de requerir mas que una accion que puede tener un argumento

  ~~~
  const initialTodos = [{
    id:1,
    todo: 'Comprar pan',
    done:false,
  }]

  const todoReducer = (state = initialTodos, action) => {

    return state;
  }
  ~~~