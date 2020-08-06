exports.createPages = ({ actions }, options) => {
  const { contactPath = '/contact', successPath = '/thanks' } = options

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

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    'type SiteSiteMetadata implements Node { social: [Social] }',
    schema.buildObjectType({
      name: 'Social',
      fields: {
        url: {
          type: 'String!',
          resolve(source) {
            const { url = '' } = source
            return url
          }
        },
        name: {
          type: 'String',
          resolve(source) {
            const { name = '' } = source
            return name
          }
        }
      }
    })
  ]
  createTypes(typeDefs)
}
