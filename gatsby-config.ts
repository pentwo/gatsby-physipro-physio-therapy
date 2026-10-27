import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "PhysiPro Physiotherapy",
    description:
      "Master-qualified physiotherapy in Perth, WA with Vienn Chan — assessment, hands-on treatment, rehabilitation, home visits and telehealth.",
    siteUrl: "https://physipro-physio-therapy.netlify.app",
    author: "PhysiPro",
    locale: "en-AU",
    image: "/og-image.jpg",
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "PhysiPro Physiotherapy",
        short_name: "PhysiPro",
        start_url: "/",
        background_color: "#F8F6F0",
        theme_color: "#5B4BE0",
        display: "standalone",
        icon: "src/images/icon.png",
        // Favicons and apple-touch-icon are served from /static and linked in Seo.tsx
        include_favicon: false,
        legacy: false,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
  ],
};

export default config;
