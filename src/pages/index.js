// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {StaticImage} from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pagetitle = "Home">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/3x2-small.jpg"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage