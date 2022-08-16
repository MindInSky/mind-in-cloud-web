import { graphql } from 'gatsby'

export const imageFragment = graphql`
  fragment imageFragment on ImagesJson {
    id
    title
    description
    image
    image_data {
      ...imageSharpFragment
    }
  }
`