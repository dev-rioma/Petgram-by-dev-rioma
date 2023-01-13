import React from 'react'
import { gql, useQuery } from '@apollo/client'
import ListOfFavs from '../listOfFavs/List'

const GET_FAVORITES = gql`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`
const RenderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  const { favs } = data

  return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () => {
  const { loading, error, data } = useQuery(GET_FAVORITES, {
    fetchPolicy: 'cache-and-network'
  })

  return <RenderProp loading={loading} data={data} error={error} />
}
