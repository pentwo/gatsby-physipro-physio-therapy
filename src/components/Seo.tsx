import React from "react";
import { graphql, useStaticQuery } from "gatsby";

interface SeoProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

export const Seo: React.FC<SeoProps> = ({ title, description, pathname, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          author
          locale
          image
        }
      }
    }
  `);

  const { siteMetadata } = data.site;
  const seo = {
    title: title ? `${title} | ${siteMetadata.title}` : siteMetadata.title,
    description: description || siteMetadata.description,
    url: `${siteMetadata.siteUrl}${pathname || ""}`,
    image: `${siteMetadata.siteUrl}${siteMetadata.image}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={siteMetadata.locale} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      {children}
    </>
  );
};
