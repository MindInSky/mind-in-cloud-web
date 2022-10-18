/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
// Import React
import * as React from 'react'
import PropTypes from 'prop-types'

// Import Libraries
import is from 'is_js'
import loadable from '@loadable/component'

// Import Modifiers
import Seo from 'modifiers/seo'

const Components = {
  // Loadable Blocks
  header: loadable(() => import( `./header` )),
  simpleHeader: loadable(() => import( `simpleComponents/header` )),
  footer: loadable(() => import( `./footer` )),
  simpleFooter: loadable(() => import( `simpleComponents/footer` )),
}

const Layout = props => {

  const { 
    seo = false,
    header = {},
    footer = {},
    children = false,
    simple = false,
  } = props

  const Header = simple ? Components['simpleHeader'] : Components['header']
  const Footer = simple ? Components['simpleFooter'] : Components['footer']

  return (
    <>
      <Seo { ...seo } />
      { ( is.not.empty( header ) || simple ) && <Header { ...header } />}
      <main>
        { children }
      </main>
      { ( is.not.empty( footer ) || simple ) && <Footer { ...footer } />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
