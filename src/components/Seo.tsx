import React from "react";
import { graphql, useStaticQuery } from "gatsby";

interface SeoProps {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  noindex?: boolean;
  children?: React.ReactNode;
}

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  pathname,
  image,
  noindex,
  children,
}) => {
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
    url: `${siteMetadata.siteUrl}${pathname || "/"}`,
    image: `${siteMetadata.siteUrl}${image || siteMetadata.image}`,
  };

  const businessId = `${siteMetadata.siteUrl}/#business`;
  const personId = `${siteMetadata.siteUrl}/#vienn-chan`;
  const sameAs = [
    "https://www.facebook.com/vienn.physipro.physiotherapy.perth",
    "https://www.instagram.com/vienn_perth_physio/",
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physiotherapy",
        "@id": businessId,
        name: siteMetadata.title,
        description: siteMetadata.description,
        url: siteMetadata.siteUrl,
        image: `${siteMetadata.siteUrl}${siteMetadata.image}`,
        logo: `${siteMetadata.siteUrl}/favicon.svg`,
        telephone: "+61414783263",
        email: "physiprophysiotherapy@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Duncraig",
          addressRegion: "WA",
          postalCode: "6023",
          addressCountry: "AU",
        },
        areaServed: "Perth, WA",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Tuesday", "Thursday"],
            opens: "09:00",
            closes: "17:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "13:00",
          },
        ],
        founder: { "@id": personId },
        employee: { "@id": personId },
        sameAs,
      },
      {
        "@type": "Person",
        "@id": personId,
        name: "Vienn Chan",
        alternateName: ["Vienn Chan Ka Yan", "陳嘉欣"],
        jobTitle: "Master Physiotherapist",
        url: `${siteMetadata.siteUrl}/about/`,
        worksFor: { "@id": businessId },
        knowsLanguage: ["English", "Cantonese", "Mandarin"],
        knowsAbout: [
          "Physiotherapy",
          "Musculoskeletal physiotherapy",
          "Neurokinetic Therapy",
          "Vestibular rehabilitation",
          "Pelvic health",
          "Clinical Pilates",
          "Acupuncture",
        ],
        alumniOf: [
          { "@type": "CollegeOrUniversity", name: "Curtin University" },
          { "@type": "CollegeOrUniversity", name: "The Hong Kong Polytechnic University" },
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "degree",
            name: "Master of Clinical Physiotherapy (Musculoskeletal)",
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "degree",
            name: "Bachelor of Physiotherapy",
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "certificate",
            name: "Diploma in Clinical Acupuncture",
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "certificate",
            name: "Neurokinetic Therapy Level 3 (Master)",
          },
        ],
        sameAs,
      },
    ],
  };

  return (
    <>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <meta name="theme-color" content="#5B4BE0" />
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={siteMetadata.locale.replace("-", "_")} />
      <meta property="og:locale:alternate" content="zh_HK" />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="PhysiPro Physiotherapy — Vienn Chan, Master Physiotherapist in Perth" />
      <meta property="og:site_name" content={siteMetadata.title} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {/* Structured data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
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
