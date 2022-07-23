// Bulma doc https://bulma.io/documentation/layout/container/
// Import React
import React from 'react'

// Everything else in alphabetic order
import is from 'is_js'

// Import Modifiers
import classy from 'modifiers/classy'

const Container = props => {

    const {
        type = false,
        children = false,
        className = false, 
    } = props

    const containerClasses = classy([
        `container`,
        type === `fluid` ? `is-fluid` : false,
        is.not.boolean(type) && type !== `fluid` ? `is-max-${type}` : false,
        className
    ])
    
    return ( 
        <div { ...containerClasses }>
            { children }
        </div>
    )
}

export default Container