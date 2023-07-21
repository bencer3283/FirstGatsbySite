import * as React from 'react';
import { 
    Link,
    useStaticQuery,
    graphql } from 'gatsby';
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    siteTitle } from './components/layout.module.css';

const Layout = (props) => {
        const siteData = useStaticQuery(graphql`query {
            site {
              siteMetadata {
                title
                description
              }
            }
            siteBuildMetadata {
              buildTime
            }
          }`)
        return(
            <div className={container}>
                <header className={siteTitle}>{siteData.site.siteMetadata.title}</header>
                <nav>
                    <ul className={navLinks}>
                        <li className={navLinkItem}><Link to='/'>Home</Link></li>
                        <li className={navLinkItem}><Link to='/about'>About</Link></li>
                        <li className={navLinkItem}><Link to='/blog'>Blog</Link></li>
                    </ul>
                </nav>
                <main>
                    <h1 className={heading}>{props.pageTitle}</h1>
                    {props.children}
                </main>
            </div>
        )
    };

export default Layout;