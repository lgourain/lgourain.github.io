module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Louis Gourain - Développeur freelance Vue.js & Nuxt`,
        short_name: `Louis Gourain`,
        start_url: `/`,
        background_color: `#FAF7F2`,
        theme_color: `#232B45`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
