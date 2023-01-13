import React from 'react'
import { FavsWithQuery } from '../components/container/GetFavorites'
import Layuot from '../components/layout/layuot'

export default () => {
  return (
    <Layuot title='Tus favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
      <FavsWithQuery />
    </Layuot>
  )
}
