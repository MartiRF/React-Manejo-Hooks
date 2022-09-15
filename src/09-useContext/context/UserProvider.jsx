import React from 'react'
import { useState } from 'react'
import { UserContext } from './UserContext'

const user = {
    id:123,
    name:'Martin',
    edad:21,
    estadoMental:'Critico'
}
export const UserProvider = ({ children }) => {

  const [user, setUser] = useState()

  return (
    // <UserContext.Provider value={{hola:'mundo',user:user}}>
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}
