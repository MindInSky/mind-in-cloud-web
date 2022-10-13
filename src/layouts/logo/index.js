// Import React
import React from 'react'

// Import Layouts
import { Container } from 'layouts'

// Import Custom Icons
import { LogoCircle } from 'icons'

// Import Modifiers
// import Wrapper from 'modifiers/wrapper'
import classy from 'modifiers/classy'

const logoData = {
	src : '../../../static/icons/android-chrome-512x512.png',
	alt : 'MindInSky Logo',
	className: 'logo-icon'
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
		<div { ...logoClasses } { ...passed } >
			<LogoCircle/>
		</div>
	)
}

export default Logo
