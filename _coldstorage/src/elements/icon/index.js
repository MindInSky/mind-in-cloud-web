// Link picker between Link and a elements 
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/

// Import React
import React from 'react'

// Import Libraries
import is from 'is_js'

//Iimport Modifiers
import classy from 'modifiers/classy'

const Icon = props => {

    // Stuff happens here
    const {
      className = false,
      children = false
    } = props

    const iconClasses = classy([
      'icon', // Bulma
      'icon-wrapper', // Ours
      className 
    ])
    
    if ( is.not.truthy( children ) ){

      console.warn(`Icon, won't render, error: icon with no children: `, props )

      return null

    }

    return <div { ...iconClasses } >{ children }</div>
    

}

export default Icon