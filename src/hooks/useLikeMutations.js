import { useMutation, gql } from '@apollo/client'

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
  likePhoto(input: $input) {
    id,
    liked,
    likes
  }
}
`
const UseLikeMutation = () => {
  const [toggleLikePhoto] = useMutation(LIKE_PHOTO)

  return { toggleLikePhoto }
}

export default UseLikeMutation
