// Import React
import React from 'react'

// Import Elements
import { Container, Link, Image, Navigation } from 'elements'

// Import Modifiers
import classy from 'modifiers/classy'

// Import Libraries
// import is from 'is_js'
import is from 'is_js'
import { graphql, useStaticQuery } from 'gatsby'

// Import Modifiers
// import hash from 'modifiers/hash'
import getValue from 'modifiers/getValue'

const Header = props => {

	// Stuff happens here
	const {
		className = false,
		data : {
			main_cta = {},
			menu = {} ,
		}
	} = props

	const headerClasses = classy([
		'header',
		'navbar',
		'is-fixed-top',
		className 
	])

	const containerClasses= classy([
		'is-marginless',
		'columns',
		'is-mobile',
		'is-align-items-stretch',
		'is-justify-content-space-between',
	])

	const linkClasses = classy([
		'column', 
		'is-flex',
		'is-5-mobile',
		'is-narrow-tablet',
		'is-narrow-desktop',
		'is-align-items-center',
		'link-column'
	])

	const menuWrapperClasses = classy([
		'column',
		'is-narrow'
	])

	const navClasses = classy([
		'nav-menus',
		'columns',
		'is-marginless'
	])
		
	return ( 
		<header { ...headerClasses } >
			{/* <StaticImage/> */}
			<Container type='fluid' { ...containerClasses }>
				<Link
					to="/"
					{ ...linkClasses }
				>
					{/* <Image { ...logoData } TODO static image instead /> */}
				</Link>
				{ is.not.empty( menu ) && is.all.truthy( main_cta ) &&
					<div { ...menuWrapperClasses } >
					{/* Main CTA - start - */}
					{/* { main_cta && 
						<div >

						</div>
					} */}
					{/* Main CTA -  End  - */}
					{/* Navigation  - Start - */}
					<Navigation { ...menu } />
					{/* Navigation  -  End  - */}
				</div>
				}
			</Container>
		</header>
	)
}

export default Header