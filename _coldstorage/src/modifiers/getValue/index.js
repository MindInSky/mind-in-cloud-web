// _.get ES6 implementation, taken from
// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_get
const getValue = ( obj, path, defaultValue = false ) => {

  return path.replace( /\.|\[|\]|'|"/g, `~` )
		     .split( `~` )
		     .filter( Boolean )
		     .reduce( ( obj, level ) => obj && obj[ level ], obj ) || defaultValue
}

module.exports = getValue