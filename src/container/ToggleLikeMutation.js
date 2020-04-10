import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`

const ToggleLikeMutation = ({ children }) => (
  <Mutation mutation={LIKE_PHOTO}>{children}</Mutation>
)

export { ToggleLikeMutation }
