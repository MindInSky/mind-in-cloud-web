import { graphql } from 'gatsby'

export const footerFragment = graphql`
  fragment footerFragment on headersJson {
    title
    description
    socials {
      icon
      link
    }
    settings {
      flex_direction
      justify_content
    }
  }
`