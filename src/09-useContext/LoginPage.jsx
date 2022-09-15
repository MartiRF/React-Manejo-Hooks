import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext)
  return (
    <>
        <h1>LoginPage</h1>
        <hr />
        
        <pre>
          { JSON.stringify(user)}
        </pre>

        <button 
          onClick={() => setUser({
            id:123,
            name:'Martin',
            edad:21,
            email:'martin@ejemplo.com'
          })}
          className='btn btn-primary'>
          Establecer user
        </button>
    </>
  )
}
