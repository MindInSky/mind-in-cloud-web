// Needs classes to be array of strings
// No nested arrays - All groups of classes should already be joined with spaces

const classy = ( classes ) => {

	return {
		className: ( Array.isArray( classes ) ? [ ...new Set( [].concat.apply(
			[],
			classes.filter( Boolean ).map(
				str => str.trim().split(/\b\s+/).map(
					sub => sub.trim()
				)
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