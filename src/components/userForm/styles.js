import styled from 'styled-components'
import { Link as NavLink } from 'react-router-dom'

export const Form = styled.form`
  padding: 16px 0;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled]{
    opacity: .3;
  }
`

export const Tittle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 10px;
`
export const Text = styled.p`
 font-size: 14px;
`
export const Link = styled(NavLink)`
 text-decoration: none;
 color: #8d00ff;
`
export const Error = styled.span`
color: red;
font-size: 14px;
`
