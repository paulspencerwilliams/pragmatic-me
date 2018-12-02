import React from 'react'
import { Link } from 'gatsby'

export default ({ children }) => (
  <div>
    <Link to={`/`}>
      <h3>pragmatic me</h3>
    </Link>
    <Link to={`/blog/`}>
      <h3>the blog</h3>
    </Link>
    {children}
  </div>
)
