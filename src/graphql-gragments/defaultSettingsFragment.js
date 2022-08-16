import { graphql } from 'gatsby'

export const defaultSettingsFragment = graphql`
  fragment defaultSettingsFragment on DefaultSettingsJson {
    id
    title
    identifier
    description
    settings_data {
      image {
        ...imageFragment
      }
      type
      title
      identifier
    }
  }
`