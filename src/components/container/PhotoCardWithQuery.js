import React from 'react'
import PhotoCard from '../PhotoCard/Card'
import useGetSinglePhoto from '../../hooks/useGetSinglePhoto'

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, data, error } = useGetSinglePhoto(id)

  if (loading) return null

  if (error) return <pre>{error.message}</pre>

  const { photo = {} } = data

  return <PhotoCard {...photo} />
}
