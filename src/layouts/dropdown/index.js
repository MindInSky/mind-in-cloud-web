// Import React
import React from 'react'

// Import Elements
import { Icon } from 'elements'

//Import Libraries
import is from 'is_js'
import { HiOutlineChevronDown as ChevronDown } from '@react-icons/all-files/hi/HiOutlineChevronDown'

//Iimport Modifiers
import hash from 'modifiers/hash'
import classy from 'modifiers/classy'
// import getValue from 'modifiers/getValue'

const Dropdown = props => {

	// Stuff happens here
	let {
		// src = false,
		// description = '',
    list = [],
    // icon = false,
    children = false,
		className = false,
	} = props

	const dropdownClasses = classy([ 
    'drop-wrapper',
    'is-hoverable',
    className
  ])

  // No children no render
  if( is.not.truthy( children ) ) {

    console.warn(`Dropdown, won't render, error: no children `, props )

    return null

  }

  if( is.empty( list ) || is.null( list ) ) {

    console.warn(`Dropdown, won't render, error: no list of links `, props )

    return null

  }

  const controlID = hash([list, 'dropdown'])

	return (
    <div className='dropdown is-hoverable is-right'>
      <div className='dropdown-trigger' aria-haspopup="true" aria-controls={`dropdown-menu-${controlID}`}>
        <div { ...dropdownClasses} >
          { children }
          <Icon>
            <ChevronDown/>
          </Icon>
        </div>
      </div>
      <div class="dropdown-menu" id={`dropdown-menu-${controlID}`} role="menu">
        <div class="dropdown-content">
          <div class="dropdown-item">
            <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
          </div>
        </div>
      </div>
    </div>
	)
}

export default Dropdown
