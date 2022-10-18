// Import React
import React from 'react'

// Import Elements
// import { Link } from 'elements'

// Import Modifiers
import classy from 'modifiers/classy'

// Import Layouts
import { Navigation, Logo } from 'layouts'

// Import Libraries
import is from 'is_js'
// import { StaticImage } from 'gatsby-plugin-image'

// Import Modifiers
// import Wrapper from 'modifiers/wrapper'
// import getValue from 'modifiers/getValue'

const headerData = {
  data: {
    main_cta: {
      type: "primary",
      label: "Contact Us",
      url: "#contact-us"
    },
    menu: {
			title: "Testing Header Menu",
			description: "Testing header menu, need a new default one",
			submenu: [
				{
					title: "Products",
					main_cta: {
						label: "Products",
						url: false,
						page: "/asdasd"
					}
				},
				{
					title: "This is not displayed: Solutions",
					main_cta: {
						label: "Solutions",
						url: "",
						page: "https://www.google.com/"
					},
					links: [
						{
							label: "Solution 1",
							url: "https://www.youtube.com"
						}
					]
				}
			]
		}
  },
  settings: {
    with_logo: true,
    logo_link: true,
    logo_position: true,
    with_cta: false,
    with_menus: true
  },
  title: "Testing Header",
  description: "Testing Header NOT for prod"
}

const Header = () => {

	// Stuff happens here
	let {
		className = false,
		data : {
			main_cta = {},
			menu = {} ,
		} = {},
		settings : {
			with_logo = false,
			logo_link = false,
			// logo_position = false,
			// with_cta = false,
			with_menus = false
		} = {}
	} = headerData

	const headerClasses = classy([
		'header',
		'navbar',
		'is-fixed-top',
		'is-marginless',
		'columns',
		'is-mobile',
		'is-align-items-stretch',
		'is-justify-content-space-between',
		className
	])

	const logoClasses = classy([
		'column',
		'is-1',
	])

	const menuDesktopClasses = classy([
		'column',
		'is-narrow',
		'nav-wrapper',
		'is-hidden-mobile',
	])

	// const bannerWrapperClasses = classy([
	// 	'header-banner',
	// 	'column',
	// 	'is-6-tablet',
	// 	'is-narrow-desktop',
	// 	'is-narrow-widescreen',
	// 	'is-narrow-fullhd',
	// 	'is-align-items-center',
	// 	'is-flex',
	// 	'is-align-items-center',
	// 	'has-background-danger',
	// ])

	return (
		<header { ...headerClasses } >
			{ with_logo &&
				/* Logo Image - Start - */
					<Logo { ...logoClasses } logo_link = { logo_link } />
				/* Logo Image -  End  - */
			}
			{/* Banner  */}
			{/* <div { ...bannerWrapperClasses }>
				<p>
					Renovations are being performed for a better experience
				</p>
			</div> */}
			{ with_menus && ( is.not.empty( menu ) || is.all.truthy( main_cta ) ) &&
				<div { ...menuDesktopClasses } >
				{/* Main CTA - start - */}
				{/* { main_cta &&
					<div >

					</div>
				} */}
				{/* Main CTA -  End  - */}
				{/* Navigation  - Start - Menu must not be  */}
				{ with_menus && is.not.empty( menu ) &&
					<Navigation { ...menu } />
				}
				{/* Navigation  -  End  - */}
			</div>
			}
		</header>
	)
}

export default Header
