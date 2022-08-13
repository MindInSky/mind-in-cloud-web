import { graphql } from 'gatsby'

export const footerFragment = graphql`
  fragment footerFragment on FootersJson {
    id
    title
    description
    data {
      copyright
      # menu
    }
    settings {
      with_logo
      logo_link
      logo_position
      with_cta
      with_menus
      with_socials
    }
  }
`