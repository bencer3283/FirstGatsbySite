import * as React from 'react';
import Layout from './layout';
import Seo from './components/seo';

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Layout pageTitle='About'>
                <p>Hello World!</p>
            </Layout>
        )
    }
};

export const Head = () => (
    <>
    <Seo title='About' />
    <meta name='Po Sheng Cheng' content='personal experiences' /></>
)

export default AboutPage;