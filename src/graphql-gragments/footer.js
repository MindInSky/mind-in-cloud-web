import { graphql } from 'gatsby'

export const FooterFragment = graphql`
  fragment FooterFragment on FootersJson {
    id
    title
    description
    data {
      copyright
      menu { 
        ...FooterMenuFragment
      }
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