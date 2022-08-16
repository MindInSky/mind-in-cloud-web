import { graphql } from 'gatsby'

export const headerMenuFragment = graphql`
  fragment headerMenuFragment on HeaderMenusJson {
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