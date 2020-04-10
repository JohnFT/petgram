import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'

const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <h1>User</h1>
      <SubmitButton type="button" onClick={removeAuth}>
        Logout
      </SubmitButton>
    </>
  )
}

export { User }
