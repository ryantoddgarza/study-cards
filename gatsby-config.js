const site = require('./config');

module.exports = {
  trailingSlash: 'never',
  siteMetadata: {
    siteUrl: site.url,
    title: site.title,
    author: site.author,
    desciption: site.description,
  },
  plugins: [
    // Load-first plugins
    // Source plugins
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'decks',
        path: `${__dirname}/src/data/decks`,
      },
    },
    // Transformer plugins
    'gatsby-transformer-json',
    // Other plugins
    'gatsby-plugin-sass',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '' }],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': ['X-Robots-Tag: none, noarchive'],
        },
      },
    },
    // Load-last plugins
    'gatsby-plugin-offline', // Load after `gatsby-plugin-manifest`
  ],
};
