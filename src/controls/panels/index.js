// Import React
import React from 'react'

// Import Elements
// import { Section } from 'elements'

// Import Libraries
// import { Media } from 'stores/responsiveContext'

// Import Modifiers
import classy from 'modifiers/classy'

const PanelsControl = props => {

	// Stuff happens here
	const panelClasses = classy([
			'panels-control',
	])

	return ( <div { ...panelClasses }>
    <label for='header_column_size'>
      Header Columns ( In case we want to wrap it to a length [ 3 - 12 ] )
      <input class='input-field' type='number' id='header_column_size' name='header_column_size' min={3} max={12}/>
    </label>
    <label for='footer_column_size'>
      Footer Columns ( In case we want to wrap it to a length [ 3 - 12 ] )
      <input class='input-field' type='number' id='footer_column_size' name='footer_column_size' min={3} max={12}/>
    </label>
  </div>)
}

export default PanelsControl