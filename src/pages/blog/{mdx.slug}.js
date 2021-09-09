import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

const BlogPost = ({ data }) => {
  const hero = getImage(data.mdx.frontmatter.hero_path)
    return (
        <Layout pagetitle={data.mdx.frontmatter.title}>
            <h2>{data.mdx.frontmatter.date}</h2>
            <p>From file {data.mdx.parent.name}.mdx modified {data.mdx.parent.modifiedTime}</p>
            <GatsbyImage image={hero} alt={data.mdx.frontmatter.hero_path} />
            <p>Image credit: {" "} <a href={data.mdx.frontmatter.hero_link}> Unsplash </a> </p>
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
      hero_link
      hero_path {
        childImageSharp {
          gatsbyImageData
        }
      }
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