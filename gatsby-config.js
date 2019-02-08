module.exports = {
  siteMetadata: {
    title: `GND`,
    description: `Donation Page`,
    author: `@Janice Zosa`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-stripe-checkout`,
    {
      resolve: `gatsby-plugin-stripe-checkout`,
      options: {
        async: true,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'zosadonations'
      },
    },
  ],
}