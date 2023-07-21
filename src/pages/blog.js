import * as React from 'react';
import Layout from './layout';
import Seo from './components/seo';

const BlogPage = (props) => {
    return(
        <Layout pageTitle='Blogs'>
            <p>Blog post.</p>
        </Layout>
    )
}

export const Head = () => (
    <Seo title='Blog' />
)

export default BlogPage