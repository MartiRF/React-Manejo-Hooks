import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

import { Cancelar } from './icons/cancelar'

export const HomePage = () => {
  
  const { user } = useContext(UserContext)

  return (
    <>
        <h1>HomePages</h1>
        <hr />

        <pre>
          {JSON.stringify(user,null,3)}
        </pre>
    </>
  )
}
