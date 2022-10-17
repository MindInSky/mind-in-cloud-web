// Import React
import React from 'react'

// Import Elements
import { Link, Dropdown } from 'elements'

// Import Modifiers
import classy from 'modifiers/classy'

// Import Libraries
// import is from 'is_js'
import is from 'is_js'

// Import Modifiers
import hash from 'modifiers/hash'
import getValue from 'modifiers/getValue'
import Wrapper from 'modifiers/wrapper'

const Navigation = props => {

	// Stuff happens here
	const {
    submenu = [],
		className = false,
	} = props

	const navClasses = classy([
		'navigation',
		'columns',
		'is-marginless',
    className
	])


  const navigationItemClasses = classy([
		'column',
		'is-narrow',
	])
		
	return is.not.empty( submenu ) ? (
    <div { ...navClasses } >
      { submenu.map( ( menu, index ) => {

        const { 
          main_cta = {},
          links = []
        } = menu

        if( is.not.truthy( getValue( main_cta, 'label', false )  ) ) {
          
          console.warn(`Navigation, won't render, error: submenu with no label: `, menu )
          
          // If it has no label it won't render
          return null

        }

        return is.truthy( getValue( main_cta, 'label', false ) ) && (
          <Wrapper
            key = { hash([ menu, links, index, 'wrapper']) }
            // condition= { is.not.empty( links ) && is.truthy( links ) }
            condition = { is.truthy( getValue( main_cta , 'url', false) ) || is.truthy( getValue( main_cta , 'page', false) ) }
            wrapper = { children => <Link to={ getValue( main_cta , 'url', false) || getValue( main_cta , 'page', false) }>{ children }</Link>
            }
          >
            <Wrapper
              condition = { is.not.empty( links ) && is.not.null( links ) }
              wrapper = { children => <Dropdown key={ hash([ links, index, 'dropdown']) } list ={ links } className="column is-narrow">{ children }</Dropdown>
              }
              alternate = { children => <div { ...navigationItemClasses } key={ hash([ links, index, 'dropdown']) } list ={ links } >{ children }</div>
            }
            > 
              { getValue( main_cta, 'label', '' ) }
            </Wrapper>
          </Wrapper>
        )
      })
      }
    </div>
  ) : null
}

export default Navigation