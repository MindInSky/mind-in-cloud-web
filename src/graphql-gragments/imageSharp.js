import { graphql } from 'gatsby'

export const ImageSharpFragment = graphql`
  fragment ImageSharpFragment on ImageSharp {
    gatsbyImageData
  }
`