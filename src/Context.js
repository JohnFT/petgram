import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    const token = window.sessionStorage.getItem('token')
    return token
  })

  const value = {
    isAuth,
    activateAuth: (token) => {
      window.sessionStorage.setItem('token', token)
      setIsAuth(true)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
    },
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default { Provider, Consumer: Context.Consumer }
