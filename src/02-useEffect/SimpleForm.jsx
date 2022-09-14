import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'Martin',
    email: 'Martin.com'
  });

  const { username,email } = formState;

  const onInputChange = ( {target} ) => {
    const { value,name } = target;

    setFormState({
      ...formState,
      [name]:value
    })
  }


  useEffect(() => {
    console.log('useEffect called')
  },[])

  useEffect(() => {
    // console.log('Form change')
  },[formState])

  useEffect(() => {
    // console.log('username change')
  },[username])

  useEffect(() => {
    // console.log('email change')
  },[email])


  return (
    <div>
        <h1>Formulario Simple</h1>
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

        {
          (username === 'Martin2') && <Message />
        }
    </div>
  )
}
