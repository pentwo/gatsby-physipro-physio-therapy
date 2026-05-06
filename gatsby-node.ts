import type { GatsbyNode } from "gatsby";

/**
 * Add new programmatic page creation, schema customisation, or
 * webpack tweaks here as the site grows.
 *
 * Docs: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  // Example: alias `@/components/...` -> `src/components/...`
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": `${__dirname}/src`,
      },
    },
  });
};
