import React, { useContext, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'
import { Home } from '../Page/Home'
import { GlobalStyle } from '../styles/GlobalStyle'
import Logo from '../components/Logo'
import { Detail } from '../Page/Detail'

import { User } from '../Page/User'
import { NotRegisterUser } from '../Page/NotRegisterUser'
import { NavBar } from '../components/NavBar'
import { Context } from '../Context'
import { NotFound } from '../Page/NotFound'

const Favs = React.lazy(() => import('../Page/Favs'))

const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:id" />
        {!isAuth && <NotRegisterUser path="/login" />}
        {!isAuth && <Redirect to="/login" from="/favs" />}
        {!isAuth && <Redirect to="/login" from="/user" />}
        {isAuth && <Redirect to="/" from="/login" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </Suspense>
  )
}

export default App
