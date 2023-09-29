// Import React
import React from 'react'

// Import Elements
import { Link } from 'elements'

// Import Layouts
// import { Dropdown } from 'layouts'

// Import Modifiers
import classy from 'modifiers/classy'

// Import Libraries
// import is from 'is_js'
import is from 'is_js'

// Import Modifiers
import hash from 'modifiers/hash'
import getValue from 'modifiers/getValue'
// import Wrapper from 'modifiers/wrapper'

const Navigation = props => {

	// Stuff happens here
	const {
    submenu = [],
		className = false,
	} = props

	const navClasses = classy([
		'navigation',
		'columns',
    className
	])


  const navigationItemClasses = classy([
		'column',
		'is-narrow',
    'use-argesta'
	])

	return is.not.empty( submenu ) ? (
    <div { ...navClasses } >
      {/* { submenu.map( ( menu, index ) => { */}
      { submenu.map( ( menu , index) => {

        const {
          main_cta = {},
          // links = []
        } = menu

        if( is.not.truthy( getValue( main_cta, 'label', false )  ) ) {

          console.warn(`Navigation, won't render, error: submenu with no label: `, menu )

          // If it has no label it won't render
          return null

        }

        return null // scape the lowecode as there's nothing in it at the moment

        return is.truthy( getValue( main_cta, 'label', false ) ) && (
          <Link key={ hash(['nav-link', index, menu ])} { ...navigationItemClasses } to={ getValue( main_cta , 'url', false) || getValue( main_cta , 'page', false) }>
            { getValue( main_cta, 'label', '' ) }
          </Link>
          // This is for a different time, not useful atm
          // <Wrapper
          //   key = { hash([ menu, links, index, 'wrapper']) }
          //   condition= { is.empty( links ) }
          //   // condition = { is.truthy( getValue( main_cta , 'url', false) ) || is.truthy( getValue( main_cta , 'page', false) ) }
          //   wrapper = { children =>
          //     <Link  { ...navigationItemClasses } to={ getValue( main_cta , 'url', false) || getValue( main_cta , 'page', false) }>
          //       { children }
          //     </Link>
          //   }
          //   alternate = { children =>
          //     <Dropdown key={ hash([ links, index, 'dropdown']) } list ={ links } className="column is-narrow">
          //       { children }
          //     </Dropdown>
          //   }
          // >
          //   { getValue( main_cta, 'label', '' ) }
          // </Wrapper>
        )
      })
      }
    </div>
  ) : null
}

export default Navigation
