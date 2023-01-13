/* eslint-disable react/jsx-indent */
import React from 'react'
import { Article, ImgWrapper, Img } from './styles'
import propTypes from 'prop-types'
import useNearScreen from '../../hooks/useNearScreen'
import FavButton from '../favButton/FavButton'
import useLikeMutation from '../../hooks/useLikeMutations'
import { Link } from 'react-router-dom'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const { toggleLikePhoto } = useLikeMutation()

  const handleFavClick = () => {
    toggleLikePhoto({
      variables: { input: { id } }
    })
  }

  return (
    <Article ref={element}>
      {
        show && <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                </>
      }
    </Article>
  )
}

PhotoCard.propTypes = {
  id: propTypes.string.isRequired,
  liked: propTypes.bool.isRequired,
  src: propTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]
    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }
    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}

export default PhotoCard
