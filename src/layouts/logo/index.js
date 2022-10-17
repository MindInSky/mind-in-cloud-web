// Import React
import React from 'react'

// Import Elements
import { Link } from 'elements'

// Import Layouts
// import { Container } from 'layouts'

// Import Custom Icons
// import { LogoCircle, LogoClouds } from 'icons'

// Import Modifiers
// import Wrapper from 'modifiers/wrapper'
import classy from 'modifiers/classy'

// Import Libraries
import is from 'is_js'
import { StaticImage } from 'gatsby-plugin-image'

const logoClouds = {
	src : '../../../static/media/images/logo/clouds.png',
	alt : 'MindInSky Logo clouds',
	className: 'logo-icon-clouds'
}

const logoShine = {
	src : '../../../static/media/images/logo/shine.png',
	alt : 'MindInSky Logo shine',
	className: 'logo-icon-shine'
}

const logoLines = {
	src : '../../../static/media/images/logo/lines.png',
	alt : 'MindInSky Logo lines',
	className: 'logo-icon-lines'
}

const Logo = props => {

	const {
		// children = false,
		// container = true,
		className = false,
		...passed
	} = props

	const logoClasses = classy([  'main-logo' , className ])

	return (
		<Link
			to="/"
			{ ...logoClasses } { ...passed }
		>
			<StaticImage
				{ ...logoClouds }
			/>
			<StaticImage
				{ ...logoShine }
			/>
			<StaticImage
				{ ...logoLines }
			/>
	</Link>
	)
}

export default Logo
