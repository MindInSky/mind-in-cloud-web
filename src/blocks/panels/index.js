// Import React
import React from 'react'

// Import Elements
import { Section } from 'layouts'

// Import Modifiers
import classy from 'modifiers/classy'

const Panels = props => {

	const {
			className = false
	} = props

	// Stuff happens here
	const panelClasses = classy([
			'panels',
			className
	])

	return ( 
		<Section { ...panelClasses }>
			This site is still underconstruction.
		</Section>
	)
}

export default Panels