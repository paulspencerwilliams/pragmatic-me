const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              id
              title
              slug
              publishedAt
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
}
