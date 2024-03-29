/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My site of Gatsby tutorial`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blogs`,
        path: `${__dirname}/blogs`
      }
    },
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp'
  ],
}
