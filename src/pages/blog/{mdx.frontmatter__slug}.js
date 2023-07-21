import * as React from 'react';
import Layout from '../layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogPost = (props) => {
    const img = getImage(props.data.mdx.frontmatter.hero_img);
    return (
        <Layout pageTitle={props.data.mdx.frontmatter.title}>
            <p>{props.data.mdx.frontmatter.date}</p>
            <GatsbyImage image={img} alt={props.data.mdx.frontmatter.hero_img_alt} />
            <a href={props.data.mdx.frontmatter.hero_img_credit_link}>
              Photo credit: {props.data.mdx.frontmatter.hero_img_credit}
            </a>
            {props.children}
        </Layout>
    )
}

export const Head = (props) => (
    <Seo title={props.data.mdx.frontmatter.title} />
)

export default BlogPost;

export const query = graphql`query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      hero_img_alt
      hero_img_credit
      hero_img_credit_link
      title
      date(formatString: "MMMM D, YYYY")
      hero_img {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    parent {
      ... on File {
        modifiedTime
      }
    }
  }
}`