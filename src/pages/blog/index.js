import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'

const BlogPage = ({data}) => {
    return (
        <Layout pagetitle="My blog">
            {data.allMdx.nodes.map(node => (
                <article key={node.id}>
                  <h2>
                    <Link to={`/blog/${node.slug}`}>
                    {node.frontmatter.title}
                    </Link>
                  </h2>
                  <p>Posted {node.frontmatter.date} </p>
                  <p>Last modified {node.parent.mtime}</p>
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
      slug
      parent {
        ... on File {
          name
          mtime(formatString: "A h:m:s, MMM DD, yyyy")
        }
      }
    }
  }
}`

export default BlogPage