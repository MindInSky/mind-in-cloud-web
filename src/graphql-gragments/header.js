import { graphql } from 'gatsby'

export const HeaderFragment = graphql`
  fragment HeaderFragment on HeadersJson {
    id
    title
    description
    data {
      main_cta {
        label
        type
        url
      }
      menu {
        ...HeaderMenuFragment
      }
    }
    settings {
      logo_link
      logo_position
      with_cta
      with_logo
      with_menus
    }
  }
`