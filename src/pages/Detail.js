import React from 'react'
import { useParams } from 'react-router-dom'
import Layuot from '../components/layout/layuot'
import { PhotoCardWithQuery } from '../components/container/PhotoCardWithQuery'

const Detail = () => {
  const params = useParams()
  return (
    <Layuot title={`fotografia ${params.id}`}>
      <PhotoCardWithQuery id={params.id} />
    </Layuot>
  )
}

export default Detail
