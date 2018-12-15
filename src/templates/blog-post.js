import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default ({ data }) => (
  <Layout>
    <h1>{data.contentfulBlogPost.title}</h1>
    <div>Blog post...</div>
  </Layout>
)
export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      slug
    }
  }
`
