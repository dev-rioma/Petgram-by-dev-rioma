import React from 'react'
import propTypes from 'prop-types'
import { Button } from './styles'

const SubmitButton = ({ children, disable, onClick }) => {
  return (
    <Button disabled={disable} onClick={onClick}>
      {children}
    </Button>
  )
}

SubmitButton.propTypes = {
  disable: propTypes.bool,
  onClick: propTypes.func,
  children: propTypes.node.isRequired
}

export default SubmitButton
