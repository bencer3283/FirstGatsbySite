import * as React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"
import {container, pagehead, navlinks, navitem, navtext, siteTitle} from "./layout.module.css"

const Layout = ({pagetitle, children}) => {
    const data = useStaticQuery(graphql`{
        site {
          siteMetadata {
            title
          }
        }
      }`)
    
    return(
    <main className={container}>
        <title>{pagetitle} | {data.site.siteMetadata.title}</title>
        <p className={siteTitle}>{data.site.siteMetadata.title}</p>
        <nav>
            <ul className={navlinks}>
                <li className = {navitem}><Link className={navtext} to = "/">Home</Link></li>
                <li className = {navitem}><Link className={navtext} to = "/about">About</Link></li>
                <li className = {navitem}><Link className={navtext} to = "/blog">Blog</Link></li>
            </ul>
        </nav>
        <h1  className={pagehead}>{pagetitle}</h1>
        {children}
    </main>
    )
}

export default Layout