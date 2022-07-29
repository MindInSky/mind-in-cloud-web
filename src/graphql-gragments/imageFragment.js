import { graphql } from 'gatsby'

export const imageFragment = graphql`
  fragment imageFragment on ImagesJson {
    alt
    author
    credit
    image {
      gatsbyImageData
    }
  }
`