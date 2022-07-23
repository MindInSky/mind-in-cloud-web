import { graphql } from 'gatsby'

export const headerFragment = graphql`
  fragment headerFragment on headersJson {
    title
    description
    logo
    menu {
      label
      link
    }
    settings {
      flex_direction
    }
  }
`