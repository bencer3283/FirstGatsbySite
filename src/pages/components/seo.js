import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Seo = (props) => {
    const siteData = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
      `
    );
    return (
        <title>{props.title} | {siteData.site.siteMetadata.title}</title>
    )


    
}

export default Seo;