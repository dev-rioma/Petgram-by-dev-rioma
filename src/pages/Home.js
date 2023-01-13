import React from 'react'
import { useParams } from 'react-router-dom'
import Layuot from '../components/layout/layuot'
import { ListOfCategories } from '../components/listOfCategories/list'
import ListOfPhotoCards from '../components/ListOfPhotoCards/List'

const HomePage = () => {
  const params = useParams()
  return (
    <Layuot title='Tu app de fotos de mascotas' subtitle='Con petgram puedes encontrar fotos de animales domesticos'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.id} />
    </Layuot>
  )
}

export const Home = React.memo(HomePage, (preProps, props) => {
  return preProps.id === props.id
})
