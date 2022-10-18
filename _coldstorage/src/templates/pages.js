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

  const node = getValue( data, `pagesJson`, {} )

  const {
    url = false,
    layout = {},
    seo : seoData = {}
  } = node

  const Panels = Components['panels']

  if ( is.not.empty( node ) ){

    return (
      <Layout
        { ...layout }
        seo = {{ ...seoData , url : url }} 
      >
        <Panels/>
      </Layout>
    )

  } else {

    // console.error( `Something went wrong generating this page. Here is the node data: `, data )
    console.error( `Something went wrong generating this page ${ url } | ${ pageContext?.pagePath}, ID: ${ pageContext?.id }` )
    return null

  }

}

export default Pages

export const query = graphql`
  query PagesTemplateQuery( $id: String, $do_not_publish: Boolean, $is_404: Boolean ) {
    pagesJson( 
      id: { eq: $id } 
      admin: {
        do_not_publish: { eq: $do_not_publish } , 
        is_404: { eq: $is_404 }
      }
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
      # image
      no_follow
      no_index
    }
    layout {
      footer {
        ...FooterFragment
      }
      header {
        ...HeaderFragment
      }
    }
  }
}
`