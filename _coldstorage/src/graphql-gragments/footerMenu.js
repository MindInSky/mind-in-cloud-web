import { graphql } from 'gatsby'

export const FooterMenuFragment = graphql`
  fragment FooterMenuFragment on FooterMenusJson {
    id
    title
    description
    submenu {
      title
      main_cta {
        url
        page
        label
      }
      links {
        url
        label
      }
    }
  }
`