// Bulma doc https://bulma.io/documentation/layout/container/
// Import Libraries
import React from 'react'

// Everything else in alphabetic order
import is from 'is_js'

// Import Modifiers
import classy from 'modifiers/classy'

const Container = props => {

    const {
        type = false,
        children = false,
    } = props

    let { properties = {} } = props

    properties = {
        ...properties,
        ...classy([
            `container`,
            type === `fluid` ? `is-fluid` : false,
            is.not.boolean(type) && type !== `fluid` ? `is-max-${type}` : false,
            properties?.class
        ])
    }

    return ( 
        <div { ...properties }>
            { children }
        </div>
    )
}

export default Container