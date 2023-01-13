import React, { useContext } from 'react'
import { AppContext } from '../Context'
import SubmitButton from '../components/SubmitButton/Button'

const User = () => {
  const { removeAuth } = useContext(AppContext)
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar Sesion</SubmitButton>
    </>
  )
}

export default User
