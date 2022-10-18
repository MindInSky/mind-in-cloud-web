/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
// Import React
import React from "react"

// Import Libraries
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// Import Modifiers
import getValue from 'modifiers/getValue'

const Seo = props => {
  
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const { 
    lang = 'en',
    url = false,
    meta = [],
    title: meta_title = false,
    description : meta_description = false,
    seo_image = false,
  } = props

  // Pick the one with properties on it
  const title = meta_title || site.siteMetadata?.title
  const description = meta_description || site.siteMetadata?.description
  const socialImage = getValue( seo_image , `image.gatsbyImageData.images.fallback.src`, false )
  const sitename = site.siteMetadata?.title

  // Uncomment to take a peek at what Helmet renders
  /*
    const helmet = Helmet.peek()
    console.log(`🚀 ~ file: index.js ~ line 39 ~ helmet`, helmet)
  */  

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      bodyAttributes={{
        class: 'has-navbar-fixed-top'
      }}
      title={title}
      titleTemplate={ `${ title && `${ title } | `}${ sitename }` }
      link={[
        {
          rel: `canonical`,
          href: `${site.siteMetadata?.siteUrl}${url}`,
        },
      ]}
      meta={[
        {
          name: `description`,
          content: description,
        },

        /* OpenGraph / Facebook */
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:url`,
          content: url
        },
        {
          property: `og:image`,
          content: socialImage
        },
        {
          property: `og:type`,
          content: `website`,
        },

        /* Twitter */
        {
          name: `twitter:card`,
          content: `summary`,
        },
        // {
        //   name: `twitter:creator`,
        //   content: site.siteMetadata?.author || ``,
        // },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `twitter:image`,
          content: socialImage
        },
      ].concat(meta)}
    >
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
