import { graphql } from 'gatsby'

export const footerMenuFragment = graphql`
  fragment footerMenuFragment on FooterMenusJson {
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