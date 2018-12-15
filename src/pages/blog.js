import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'

export default ({ data }) => (
  <Layout>
    <h1>The blog</h1>
    <ul>
      {data.allContentfulBlogPost.edges.map(edge => {
        const { node } = edge
        return (
          <li>
            <Link to={node.slug}>{node.title}</Link>
          </li>
        )
      })}
    </ul>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`
