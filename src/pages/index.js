import * as React from 'react';
import Layout from './layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from './components/seo'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout pageTitle='Home'>
        <p>This is created by following the official tutorial.</p>
        <StaticImage src='https://i.imgur.com/xvH1xl5.jpg' alt='personal image'/>
      </Layout>
    )
  }
};

export const Head = () => (<Seo title='Home' />);

export default IndexPage;