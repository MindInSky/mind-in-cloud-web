// Image from bulma
// https://bulma.io/documentation/elements/image/
// These should usually be inside columns as their requirement
// * They must have a parent with a width

// Import Libraries
import React from 'react'
// for the time being we do staticImages only as we don't use a CMS here
import { graphql } from "gatsby"
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

//Iimport Modifiers
import classy from 'modifiers/classy'

const Image = props => {

    // Stuff happens here
    let {
        src = false,
        classes = false,
        ...passed
    } = props

    let properties = {
        ...classy([
            'image',
            classes
        ])
    }

    //TODO check static image usage with this
    return Boolean( src ) && ( <>
        <figure { ...properties }>
            <img src={ src } { ...passed } />
        </figure>
        'compare'
        <GatsbyImage src={ src } { ...passed } />
    </>
    )
}

export default Image