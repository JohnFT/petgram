import React from 'react'
import { Helmet } from 'react-helmet'

const Layout = ({ title, children, description }) => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    <main>{children}</main>
  </>
)

export { Layout }
