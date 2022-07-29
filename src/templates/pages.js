// Import React
import React from 'react'

// Import Layout
import Layout from 'layouts/layout'

// Import Libraries
import is from 'is_js'
import { graphql } from 'gatsby'
import loadable from '@loadable/component'

// Import Modifiers
import getValue from 'modifiers/getValue'

/*****************/
/**  Loadables  **/
/*****************/

const Components = {
  // Loadable Blocks
  panels: loadable(() => import( `components/panels` )),

}


const Pages = ( { data, pageContext } ) => {

  const node = getValue( data, getValue( pageContext , `type`, '' ), {} )

  const {
    path = false,
    title = false,
    layout = {}
  } = node

  const Panels = Components['panels']

  if ( is.not.empty( node ) ){

    return (
      <Layout
        { ...{ 
          ...layout, 
          // Add some data to seo before passing it
          seo: { title, path, ...getValue( layout, `seo`, {} ) } } 
        }
      >
        <Panels/>
      </Layout>
    )

  } else {

    // console.error( `Something went wrong generating this page. Here is the node data: `, data )
    console.error( `Something went wrong generating this page ${ node?.path } | ${ pageContext?.pagePath}, ID: ${ pageContext?.id }` )
    return null

  }

}

export default Pages

export const query = graphql`
  query PagesTemplateQuery( $id: String ) {
    pagesJson( id: {eq: $id }) {
    id
    path
    title
    layout {
      header {
        ...headerFragment
      }
      footer {
        ...footerFragment
      }
      seo {
        no_index
        no_follow
        meta_title
        meta_description
        seo_image {
          ...imageFragment
        }
      }
    }
    components {
      panels {
        data {
          content
          header
          media {
            image {
              ...imageFragment
            }
          }
        }
      }
    }
  }
}
`