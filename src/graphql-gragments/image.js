import { graphql } from 'gatsby'

export const ImageFragment = graphql`
  fragment ImageFragment on ImagesJson {
    id
    title
    description
    image
    image_data {
      ...ImageSharpFragment
    }
  }
`