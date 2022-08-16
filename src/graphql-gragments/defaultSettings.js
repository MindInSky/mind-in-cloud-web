import { graphql } from 'gatsby'

export const SettingsFragment = graphql`
  fragment SettingsFragment on DefaultSettingsJson {
    id
    title
    identifier
    description
    settings_data {
      image {
        ...ImageFragment
      }
      type
      title
      identifier
    }
  }
`