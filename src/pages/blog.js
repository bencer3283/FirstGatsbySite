import * as React from 'react';
import Layout from './layout';
import Seo from './components/seo';
import { graphql } from 'gatsby';

const BlogPage = (props) => {
    return(
        <Layout pageTitle='Blogs'>
            <ul>
                {
                    props.data.allMdx.nodes.map(
                        (item) => (
                        <article key={item.id}>
                            <h2>
                                {item.frontmatter.title}
                            </h2>
                            <p>
                                Posted: {item.frontmatter.date}
                            </p>
                            <p>
                                Modified: {item.parent.modifiedTime}
                            </p>
                            <p>
                                {item.excerpt}
                            </p>
                        </article>))
                }
            </ul>
        </Layout>
    )
}

export const Head = () => (
    <Seo title='Blog' />
)

export default BlogPage

export const blogQuery = graphql`query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        excerpt
        parent {
          ... on File {
            modifiedTime(formatString: "HH:mm MMM D, YYYY")
          }
        }
      }
    }
  }`