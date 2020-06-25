exports.createPages = ({ actions }, options) => {
  const { contactPath, successPath } = options

  const pages = [
    {
      path: contactPath,
      component: require.resolve('./src/templates/contact.js')
    },
    {
      path: successPath,
      component: require.resolve('./src/templates/success.js')
    }
  ]

  pages.forEach((page) => {
    actions.createPage(page)
  })
}
