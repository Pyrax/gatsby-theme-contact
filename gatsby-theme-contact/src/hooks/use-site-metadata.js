import { graphql, useStaticQuery } from 'gatsby'

export default function useSiteMetadata() {
  const {
    site: { siteMetadata }
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          social {
            url
            name
          }
        }
      }
    }
  `)
  return siteMetadata
}
