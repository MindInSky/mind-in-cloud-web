/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
// Import React
import * as React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Seo from 'modifiers/seo'

// Import Libraries
import is from 'is_js'

const Layout = props => {

  const { 
    seo = false,
    header = false,
    footer = false,
    children = false
  } = props

  return (
    <>
      <Seo { ...seo } />
      { is.not.empty( header ) && is.truthy( header) && <Header { ...header } />}
      <main>
        { children }
      </main>
      <footer
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
        }}
      >
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
