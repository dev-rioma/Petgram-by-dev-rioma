import React from 'react'
import PhotoCard from '../PhotoCard/Card'
import AnimalsPhotos from '../../hoc/Photos'
import { useQuery } from '@apollo/client'

const ListOfPhotoCards = ({ categoryId }) => {
  const { data, loading, error } = useQuery(AnimalsPhotos, { variables: { categoryId: categoryId } })
  if (loading) return <p>Loading...</p>
  if (error) return <pre>{error.message}</pre>
  return (
    <ul>
      {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}

export default ListOfPhotoCards
