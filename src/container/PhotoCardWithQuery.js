import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import { PhotoCard } from '../components/PhotoCard'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`
const renderProp = ({ loading, error, data = {} }) => {
  if (loading) return <p>Cargando ...</p>
  if (error) return <p>!Error {error} </p>

  const { photo = {} } = data
  return (
    <PhotoCard
      src={photo.src}
      likedInit={photo.liked}
      likes={photo.likes}
      id={photo.id}
    />
  )
}
const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
)

export { PhotoCardWithQuery }
