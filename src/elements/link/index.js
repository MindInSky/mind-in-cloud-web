// Link picker between Link and a elements 
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/

// Import React
import React from 'react'

// Import Libraries
import is from 'is_js'
import { Link as GatsbyLink} from 'gatsby'

//Iimport Modifiers
import classy from 'modifiers/classy'

const Link = props => {

    // Stuff happens here
    let {
      to = false,
      children = false,
      className = false,
      noStyles = false,
      activeClassName = undefined,
    } = props

    const linkClasses = classy([
      'link',
      noStyles && 'unstyle', //TODO not sure if this can be done, will check
      className
    ])

    let link

    // To must be a string and children be present
    if ( is.string( to ) && is.not.falsy( children ) ){
      // External links and relative links ( inside the page ) must use a element
      if ( is.startWith( to , '#') || is.not.startWith( to, '/') ){
        link = <a
          href={to}
          { ...linkClasses }
        >
          {children}
        </a>
      } else if ( is.startWith( to , '/' ) ) {

        // Add trailing slash if link does not have it already
        if ( is.not.endWith( to, '/' ) ){
          to += '/'
        }

        link = <GatsbyLink
          to = { to }
          { ...linkClasses}
          activeClassName = { activeClassName }
        >
          { children }
        </GatsbyLink>
      }

    } else { // If initial check is false warning

      console.warn( `Link element, won't render, error: Missing "to" or "children" props`)
      link = false

    }

    return Boolean( link ) ? link : null
}

export default Link
