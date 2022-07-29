// Import React
import React from 'react'

// Import Elements
import { Section } from 'elements'

// Import Libraries
import { Media } from 'stores/responsiveContext'

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
			<Media lessThan='desktop'>
				{( className, renderChilden ) => {

					const tabletClasses = classy([
						panelClasses,
						className
					])

					return renderChilden && (

						<div { ...tabletClasses }>
							This site is still underconstruction.
						</div>

					)

				}}
			</Media>
			<Media greaterThanOrEqual='desktop'>
					{( className, renderChilden ) => {

						const mediaClasses = classy([
							panelClasses,
							className
						])

						return renderChilden && (
							
							<div { ...mediaClasses }>
								This site is still underconstruction.
							</div>

						)

					}}
			</Media>
		</Section>
	)
}

export default Panels