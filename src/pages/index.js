import * as React from 'react';
import Layout from './layout';

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout pageTitle='Home'>
        <p>This is created by following the official tutorial.</p>
      </Layout>
    )
  }
};

export const Head = () => (<title>Home</title>);

export default IndexPage;