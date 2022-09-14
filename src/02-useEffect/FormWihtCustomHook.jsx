import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm';
import { Message } from './Message';

export const FormWihtCustomHook = () => {

const {onReset,formState, onInputChange, username, email, password} = useForm(
  {
    username: '',
    email: '',
    password:''
  }
);

// const {username,email,password} = formState

  return (
    <div>
        <h1>Formulario con Custom Hook</h1>
        <hr />

        <input 
          placeholder='Username'
          className='form-control'
          type="text"
          value={username}
          name='username' 
          onChange={onInputChange}                  
        />
        <input 
          type="email"
          value={email}
          className='form-control mt-2'
          placeholder='email@ejemplo.com'
          name='email' 
          onChange={onInputChange}          
        />
        <input 
          type="email"
          value={password}
          className='form-control mt-2'
          placeholder='password'
          name='password' 
          onChange={onInputChange}          
        />

        {
          (username === 'Martin2') && <Message />
        }

        <button onClick={onReset} className='btn btn-primary mt-3'>Borrar </button>
    </div>
  )
}
