module.exports = {
  siteMetadata: {
    title: 'Gatsby Contact Page Theme',
    titleTemplate: '%s | gatsby-theme-contact',
    description:
      'Contact page for Gatsby which comes with Netlify Forms by default.',
    social: [
      {
        url: 'https://github.com/Pyrax',
        name: 'GitHub'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-theme-contact`,
      options: {
        contactPath: '/',
        successPath: '/thanks'
      }
    }
  ]
}
