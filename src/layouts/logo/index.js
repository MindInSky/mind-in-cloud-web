// Import React
import React from 'react'

// Import Elements
import { Link } from 'elements'

// Import Layouts
// import { Container } from 'layouts'

// Import Custom Icons
import Brisho from '../../../static/media/svgLogo/brisho.svg'
import Lineas from '../../../static/media/svgLogo/lineas.svg'
import Nubes from '../../../static/media/svgLogo/nubes.svg'

// Import Modifiers
// import Wrapper from 'modifiers/wrapper'
import classy from 'modifiers/classy'

// Import Libraries
// import is from 'is_js'
import { StaticImage } from 'gatsby-plugin-image'
import { useLocation } from '@reach/router'

const logoClouds = {
	src : '../../../static/media/images/logo/clouds.png',
	alt : 'MindInSky Logo clouds',
	className: 'logo-icon-clouds has-ratio',
	aspectRatio: 1,
	style : { position: "absolute" }
}

const logoShine = {
	src : '../../../static/media/images/logo/shine.png',
	alt : 'MindInSky Logo shine',
	className: 'logo-icon-shine has-ratio',
	aspectRatio: 1,
	style : { position: "absolute" }

}

const logoLines = {
	src : '../../../static/media/images/logo/lines.png',
	alt : 'MindInSky Logo lines',
	className: 'logo-icon-lines has-ratio',
	aspectRatio: 1,
	style : { position: "absolute" }
}

const Logo = props => {

	const { pathname } = useLocation()

	const {
		// children = false,
		// container = true,
		// logo_link = false,
		className = false,
		...passed
	} = props

	const logoClasses = classy([
		'main-logo',
		'is-paddingless',
	 	className
	])

	return (
		<Link
			to={ pathname === '/' ? '#hero-top' : '/'}
			{ ...logoClasses } { ...passed }
		>
			<figure className='image is-square'>
				<Nubes
					{ ...logoClouds }
				/>
				<Brisho
					{ ...logoShine }
				/>
				<Lineas
					{ ...logoLines }
				/>
			</figure>
		</Link>
	)
}

export default Logo
