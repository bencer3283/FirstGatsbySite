import * as React from 'react';
import Layout from './layout';

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
    <title>About</title>
    <meta name='Po Sheng Cheng' content='personal experiences' /></>
)

export default AboutPage;