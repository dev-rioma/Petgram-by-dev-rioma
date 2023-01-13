import React, { useContext } from 'react'
import { AppContext } from '../Context'
import UserForm from '../components/userForm/UserForm'
import RegisterMutation from '../components/container/RegisterMutation'
import LoginMutation from '../components/container/LoginMutation'

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext)
  return (
    <>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(({ data }) => {
                const { signup } = data
                activateAuth(signup)
              })
            }

            const errorMsg = error && 'El usuario ya existe o hay algun problema'
            return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} tittle='Registrarse' />
          }
        }
      </RegisterMutation>
      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(({ data }) => {
                const { login } = data
                activateAuth(login)
              })
            }

            const errorMsg = error && 'La constrasena no es correcta o el usuario no existe'
            return <UserForm disabled={loading} error={errorMsg} tittle='Iniciar sesion' onSubmit={onSubmit} />
          }
        }
      </LoginMutation>
    </>
  )
}

export default NotRegisteredUser
