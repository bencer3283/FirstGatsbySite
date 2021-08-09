import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = ({ data }) => {
    return (
        <Layout pagetitle={data.mdx.frontmatter.title}>
            <h2>{data.mdx.frontmatter.date}</h2>
            <p>From file {data.mdx.parent.name}.mdx modified {data.mdx.parent.modifiedTime}</p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}

export const query = graphql`
query MyQuery($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "DD MMM yyyy")
      }
      body
      parent {
        ... on File {
          name
          modifiedTime(formatString: "DD MMM yyyy")
        }
      }
    }
  }
  
`

export default BlogPost