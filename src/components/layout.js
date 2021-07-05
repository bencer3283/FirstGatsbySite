import * as React from "react"
import {Link} from "gatsby"
import {container, pagehead, navlink, navitem, navtext} from "./layout.module.css"

const Layout = ({pagetitle, children}) => {
    return(
    <main className={container}>
        <title>{pagetitle}</title>
        <nav>
            <ul className={navlink}>
                <li className = {navitem}><Link className={navtext} to = "/">Home</Link></li>
                <li className = {navitem}><Link className={navtext} to = "/about">About</Link></li>
            </ul>
        </nav>
        <h1  className={pagehead}>{pagetitle}</h1>
        {children}
    </main>
    )
}

export default Layout