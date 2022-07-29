import { graphql } from 'gatsby'

export const footerFragment = graphql`
  fragment footerFragment on FootersJson {
    id
    title
    description
    copyright
    socials {
      icon
      link
    }
    # settings {
    #   flex_direction
    #   justify_content
    # }
  }
`