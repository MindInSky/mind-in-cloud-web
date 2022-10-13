// Port of util.inspect ... sort of:
// https://stackoverflow.com/a/57193345

const stringify = ( obj, settings ) => {

	let {
		depth = 2,
		spaces = 0,
		replacer = null
	} = settings || {}

    depth = isNaN( +depth ) ? 1 : depth

    let recursMap = new WeakMap()

    // JSON.stringify() has it's own rules, which we respect here by using it for property iteration
    const _build = ( obj, depth, o, a, r ) => {
    	return !obj || typeof obj !== `object` ? obj
            : ( r = recursMap.has( obj ), recursMap.set( obj, true ), a = Array.isArray( obj ),
               r ? ( o = null ) : JSON.stringify( obj, function( k,v ){ if ( a || depth > 0 ) { if ( replacer ) v = replacer( k, v ); if ( !k ) return ( a = Array.isArray( v ), obj = v ); !o && ( o = a ? [] : {}); o[ k ] = _build( v, a ? depth : depth - 1 ); }}),
               o === void 0 ? ( a ? [] : {}) : o );
    }

    return JSON.stringify( _build( obj, depth ), null, spaces )
}

export default stringify