import React from 'react'
import BaseLayout from 'gatsby-theme-contact/src/components/layout'

import SEO from '../../components/seo'

const Layout = ({ children }) => (
  <>
    <SEO />
    <BaseLayout>{children}</BaseLayout>
  </>
)

export default Layout
