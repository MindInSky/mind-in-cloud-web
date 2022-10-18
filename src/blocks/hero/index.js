// Import React
import React from 'react'

// Import Elements
// import { ContactForm } from 'elements'

// Import Layouts
import { Section } from 'layouts'

// Import Libraries
// import { StaticImage } from 'gatsby-plugin-image'
import is from 'is_js'
import { useLocation } from '@reach/router'

// Import Modifiers
import classy from 'modifiers/classy'
// import { StaticImage } from 'gatsby-plugin-image'

// const background_image = {
// 	src : '../../../static/images/equipment_setup.jpg',
// 	alt : 'White equipment with blue lights'
// }

const ImpactHero = props => {

	const { pathname } = useLocation()

	const {
			className = false,
			title = false,
			subtitle = false,
			container = false,
			scrollId = false
	} = props

	// Stuff happens here
	const heroClasses = classy([
		'impact-hero',
		'hero',
		'is-fullheight-with-navbar',
		className
	])

	// const backgroundClasses = classy([
	// 	'impact-background',
	// ])

	// const bodyClasses = classy([
	// 	'impact-content',
	// 	'hero-body',
	// 	'columns',
	// 	'is-justify-content-space-around'
	// ])

	// const panelClasses = classy([
	// 	'hero-panel',
	// 	'hero-member',
	// 	'column',
	// 	'is-5',
	// 	'content'
	// ])

	// const formClasses = classy([
	// 	'hero-form',
	// 	'hero-member',
	// 	'column',
	// 	'is-5'
	// ])

	// const phoneLinkClasses = classy([
	// 	'subtitle',
	// 	'is-5',
	// 	'is-link',
	// 	'has-text-weight-bold',
	// 	'has-text-centered',
	// 	'is-rounded',
	// 	'button',
	// 	'is-success'
	// ])

	if ( is.falsy( title ) ) {
		console.warn(` Hero won't render, error: Hero with no title in: `, pathname )
		return null
	}

	return (
		<Section { ...heroClasses } container = { container } id={ scrollId } >
			<div className='hero-body'>
				<div className='container'>
					<h1>
						<p className='title is-1'>
							{ title }
						</p>
						{ subtitle &&
							<p className='subtitle is-3'>
								{ subtitle }
							</p>
						}
					</h1>
				</div>
			</div>
		</Section>
	)
}

export default ImpactHero
