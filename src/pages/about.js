import * as React from "react"
import {Link} from 'gatsby'

const AboutPage = () => {
    return (
        <main>
            <title>About</title>
            <h1>About the site</h1>
            <p>This is the site built by Cheng Po Sheng as a Gatsby site practice.</p>
            <Link to="/">Home</Link>
        </main>
    )
}

export default AboutPage