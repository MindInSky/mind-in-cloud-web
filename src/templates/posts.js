// Import React
import React from 'react'

// Import Layout
import Layout from 'layouts/layout'
import { graphql } from 'gatsby'

const Posts = ( { data ,  pageContext } ) => {
  
  console.log(`🚀 ~ file: pages.js ~ line 9 ~ Pages ~ pageContext`, pageContext)
  console.log(`🚀 ~ file: pages.js ~ line 8 ~ Pages ~ data`, data)

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
    path
    id
    components {
      panels {
        data {
          content
          header
          media {
            alt
            author
            credit
            type
            src {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
  }
`