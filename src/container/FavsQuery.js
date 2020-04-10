import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { FavsList } from '../components/FavsList'

const GET_FAVS = gql`
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

const renderProps = ({ data, loading, error }) => {
  if (loading) return <p>Cargando ...</p>
  if (error) return <p>Error {error.message}</p>
  const { favs = [] } = data
  return <FavsList favs={favs} />
}

const FavsQuey = () => (
  <Query query={GET_FAVS} fetchPolicy="network-only">
    {renderProps}
  </Query>
)

export { FavsQuey }
