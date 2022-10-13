// Import React
import React from 'react'

// Import Layouts
import { Container } from 'elements'

// Import Modifiers
import Wrapper from 'modifiers/wrapper'
import classy from 'modifiers/classy'

const Section = props => {

	const {
		children = false,
		container = true,
		className = false,
	} = props

	const sectionClases = classy([  'section' , className ])

	return ( 
		<section { ...sectionClases } >
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