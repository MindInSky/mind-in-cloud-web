// Image from bulma
// https://bulma.io/documentation/elements/image/
// These should usually be inside columns as their requirement
// * They must have a parent with a width

// Import React
import React from 'react'

//Import Libraries
import { GatsbyImage } from 'gatsby-plugin-image'

//Iimport Modifiers
import classy from 'modifiers/classy'

const Image = props => {

    // Stuff happens here
    let {
        alt = '',
        src = false,
        className = false,
        ...passed
    } = props

    const imageClasses = classy([  'image' , className ])

    // TODO check static image usage with this
    // TODO might not need but to specify the size on a parent element, Gatsby images seems ok
    return Boolean( src ) && ( <>
        <figure { ...imageClasses }>
            <img src={ src } { ...passed } alt={ alt } />
        </figure>
        'compare'
        <GatsbyImage src={ src } { ...passed } />
    </>
    )
}

export default Image