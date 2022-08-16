import { graphql } from 'gatsby'

export const HeaderMenuFragment = graphql`
  fragment HeaderMenuFragment on HeaderMenusJson {
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