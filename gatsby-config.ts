import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Physipro Physiotherapy",
    description:
      "Evidence-based physiotherapy in Perth, WA — assessment, treatment, and rehabilitation.",
    siteUrl: "https://www.physipro.com.au",
    author: "Physipro",
    locale: "en-AU",
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
        icon: "src/images/icon.png", // 512x512 png — add this before first build
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
