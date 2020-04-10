import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            register({ variables }).then(({ data: { login } }) => {
              activateAuth(login)
            })
          }

          const errorMessage = error && error.message
          return (
            <UserForm
              disabled={loading}
              error={errorMessage}
              title="Register"
              onSubmit={onSubmit}
            />
          )
        }}
      </RegisterMutation>
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            login({ variables }).then(({ data: { login } }) => {
              activateAuth(login)
            })
          }

          const errorMessage = error && error.message
          return (
            <UserForm
              disabled={loading}
              error={errorMessage}
              title="Iniciar sesión"
              onSubmit={onSubmit}
            />
          )
        }}
      </LoginMutation>
    </>
  )
}

export { NotRegisterUser }
