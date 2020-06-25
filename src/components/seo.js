/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, keywords, title, canonicalUrl }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            extendedTitle
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description;

  //const url = location.href ? location.href : site.siteMetadata.siteUrl;

  /*  https://www.seowebdesignllc.com/how-to-get-the-current-page-url-in-gatsby/
      https://www.gatsbyjs.org/docs/location-data-from-props/
  */

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.author}`}
      link={
        canonicalUrl !== undefined
        ? [{ rel: 'canonical', key: canonicalUrl, href: canonicalUrl }]
        : [{ rel: 'canonical', key: ``, href:`` }]
        }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `https://res.cloudinary.com/isawrub/image/upload/v1590074254/isawrub-media/Quant-2019-ColorCorrected_wbnfix.jpg`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: `https://res.cloudinary.com/isawrub/image/upload/v1590074254/isawrub-media/Quant-2019-ColorCorrected_wbnfix.jpg`,
        },
        {
          property: `twitter:site`,
          content: site.siteMetadata.siteUrl
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
  link: []
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  canonicalUrl: PropTypes.string,
}

export default SEO
