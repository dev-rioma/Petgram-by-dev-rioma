import React from 'react'
// import { useLocation } from 'react-router-dom'
import useInputValue from '../../hooks/useInputValue'
import { FaRegUserCircle } from 'react-icons/fa'
import { Error, Form, Input, Tittle } from './styles'
import SubmitButton from '../SubmitButton/Button'

const UserForm = ({ error, disabled, onSubmit, tittle }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }
  // const location = useLocation()
  // const BottomText = () => (
  //   location.pathname === '/register'
  //     ? <Text>¿Ya tienes cuenta? <Link to='/login'>Inicia Sesión.</Link></Text>
  //     : <Text>¿Aún no tienes cuenta? <Link to='/register'>Crea una cuenta.</Link></Text>
  // )
  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Tittle> <FaRegUserCircle size='34px' fill='#8d00ff' /> </Tittle>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} placeholder='Password' type='password' {...password} />
        <SubmitButton disabled={disabled}>{tittle}</SubmitButton>
        {/* <BottomText /> */}
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}

export default UserForm
