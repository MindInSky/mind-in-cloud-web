// Import React always at the top
import React from 'react'

// Everything else in alphabetic order

// Import Layouts
import { Container } from 'elements'

// Import Modifiers
import Wrapper from 'modifiers/wrapper'
import classy from 'modifiers/classy'

const Section = props => {

    const {
        children = false,
        container = true,
    } = props

    let { properties = {} } = props


    properties = {
        ...properties,
        ...classy([
            'section',
            properties?.class
        ]),
    }

    return ( 
        <section { ...properties }>
            {/* Render children, usually wrapped by a Container element unless specifically disabled by passing container={ false } */}
            <Wrapper 
                condition={ Boolean( container ) } 
                wrapper={ children => <Container type={ container }>{ children }</Container> 
                }>
                { children }
            </Wrapper>
        </section> 
    )
}

export default Section