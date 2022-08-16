import { graphql } from 'gatsby'

export const imageSharpFragment = graphql`
  fragment imageSharpFragment on imagesSharp {
    gatsbyImageData
  }
`