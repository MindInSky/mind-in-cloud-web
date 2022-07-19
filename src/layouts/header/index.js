// Image from bulma
// https://bulma.io/documentation/elements/image/
// These should usually be inside columns as their requirement
// * They must have a parent with a width
// Import React
import React from 'react'
import { Link } from "gatsby"

// Import Elements
import { Image } from 'elements'

// Import Modifiers
import classy from 'modifiers/classy'

const Header = props => {

    // Stuff happens here
    let {
        properties = false
    } = props


    properties = {
        ...properties,
        ...classy([
            'header',
            properties?.class
        ]),
    }

    return ( 
        <header { ...properties }>
            {/* <StaticImage/> */}
        </header>
    )
}

export default Header