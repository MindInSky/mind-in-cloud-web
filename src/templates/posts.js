// Import React
import React from 'react'

// Import Layout
import Layout from 'layouts/layout'
import { graphql } from 'gatsby'

const Posts = ( { data ,  pageContext } ) => {

  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <p>My blog post contents will go here (eventually).</p>
    </Layout>
  )
}

export default Posts

export const query = graphql`
  query PostTemplateQuery( $id: String ) {
    postsJson( id: {eq: $id }) {
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