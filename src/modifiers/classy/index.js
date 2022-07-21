// Needs classes to be array of strings
// No nested arrays - All groups of classes should already be joined with spaces
import is from 'is_js'

const classy = ( classes ) => {

	return {
		className: ( Array.isArray( classes ) ? [ ...new Set( [].concat.apply(
			[],
			classes.filter( Boolean ).map(
				str => {
					// if its a string, do stuff to it
					if ( is.string(str) ){
						return str.trim().split(/\b\s+/).map(
							sub => sub.trim()
						)
					} else if ( is.propertyDefined( str, 'className') ){
						// if has className it already went through classy,
						// return the className already there
						return str.className
					}

					// if none, return null and warn
					console.warn( 'classy found something unexpected: ', str )
					return null

				}
			)
		))].join(` `).trim().replace( /\s\s+/g, ` ` ) : `` ).trim()
	}
}

export default classy

// Ex
// let classes = classy([
// 	'section',
// 	classes
// ])
// <component { ...classes } />
// returns: <component class='section ...'/>