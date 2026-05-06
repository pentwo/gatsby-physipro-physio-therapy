import { graphql, useStaticQuery } from "gatsby";

interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
  author: string;
  locale: string;
}

export const useSiteMetadata = (): SiteMetadata => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          author
          locale
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
