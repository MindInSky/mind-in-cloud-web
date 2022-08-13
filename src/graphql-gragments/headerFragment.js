import { graphql } from 'gatsby'

export const headerFragment = graphql`
  fragment headerFragment on HeadersJson {
    id
    title
    description
    data {
      menu
      main_cta {
        label
        type
        url
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