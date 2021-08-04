import * as React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({data}) => {
    return (
        <Layout pagetitle="My blog">
            {data.allMdx.nodes.map(node => (
                <article key={node.id}>
                  <h2>{node.frontmatter.title}</h2>
                  <p>Posted {node.frontmatter.date} </p>
                  <p>Last modified {node.parent.mtime}</p>
                  <MDXRenderer>
                    { node.body }
                  </MDXRenderer>
                </article>
                )
            )}
        </Layout>
    )
}

export const query = graphql`query {
  allMdx(sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        title
      }
      id
      parent {
        ... on File {
          name
          mtime(formatString: "A h:m:s, MMM DD, yyyy")
        }
      }
      body
    }
  }
}`

export default BlogPage