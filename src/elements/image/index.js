// Image from bulma
// https://bulma.io/documentation/elements/image/
// These should usually be inside columns as their requirement
// * They must have a parent with a width

// Import React
import React from 'react'

//Import Libraries
import { GatsbyImage } from 'gatsby-plugin-image'

//Iimport Modifiers
// import classy from 'modifiers/classy'
import getValue from 'modifiers/getValue'
import is from 'is_js'

const Image = props => {

	// Stuff happens here
	let {
		src = false,
		description = '',
		image_data = {},
		// className = false,
		// ...passed
	} = props
  console.log(`🚀 ~ file: index.js ~ line 26 ~ props`, props)

	// const imageClasses = classy([  'image' , className ])

	// Work data to be how GatsbyImage wants it
	const GatsbyImageData = {
		image : getValue( image_data, `gatsbyImageData`, {} ),
		alt : description,
	}


	// TODO check static image usage with this
	// TODO might not need but to specify the size on a parent element, Gatsby images seems ok
	// TODO : check on sizing with bulma, need to compare options
	return Boolean( src || is.not.empty( image_data ) ) && (
		<GatsbyImage { ...GatsbyImageData } />
	)
}

export default Image