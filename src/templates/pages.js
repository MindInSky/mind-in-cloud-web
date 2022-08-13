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
  panels: loadable(() => import( `blocks/panels` )),

}


const Pages = ( { data, pageContext } ) => {
console.log(`🚀 ~ file: pages.js ~ line 27 ~ Pages ~ data`, data)

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
            seo: { title, path, ...getValue( layout, `seo`, {} ) } 
          } 
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
    pagesJson( 
      id: { eq: $id } 
    ) {
    id
    url
    title
    admin {
      do_not_publish
      is_404
    }
    seo {
      title
      description
      image
      no_follow
      no_index
    }
  }
}
`