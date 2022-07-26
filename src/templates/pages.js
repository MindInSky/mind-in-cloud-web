// Import React
import React from 'react'

// Import Components
// import { Panels } from 'components'

// Import Layout
import Layout from 'layouts/layout'
import Header from 'layouts/header'

// Import Libraries
import is from 'is_js'
import { graphql } from 'gatsby'

// Import Modifiers
import getValue from 'modifiers/getValue'

const Pages = ( { data, pageContext } ) => {
  

  const {
    layout : {
      header = {},
      footer = {},
    }
  } = getValue( data, 'pagesJson', {} )

  return (
    <Layout pageTitle="Super Cool Blog Posts" 
      header= { is.not.empty ( header ) && is.truthy( header ) && header }
    >
      <p>My blog post contents will go here (eventually).</p>
    </Layout>
  )
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