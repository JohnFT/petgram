import React from 'react'
import { CategoryList } from '../components/CategoyList'
import { PhotoCardList } from '../container/PhotoCardContainerList'
import { Layout } from '../components/Layout'

const Home = ({ id }) => (
  <>
    <Layout
      title="Petgram - tu app de fotos de mascotas"
      decription="Con Petgram puedes encotrar fotos de animales"
    >
      <CategoryList />
      <PhotoCardList categoryId={id} />
    </Layout>
  </>
)

export { Home }
