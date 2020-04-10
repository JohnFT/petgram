import React from 'react'

import { FavsQuey } from '../container/FavsQuery'
import { Layout } from '../components/Layout'

const Favs = () => (
  <>
    <Layout
      title="Petgram - tus favoritos"
      decription="Puedes encotrar tus favoritos"
    >
      <FavsQuey />
    </Layout>
  </>
)

export default Favs
