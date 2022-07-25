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
    } = props

    const iconClasses = classy([
      'icon',
      className 
    ])
    
    let link 

    return <div { ...iconClasses } >   This will be icon </div>

}

export default Icon