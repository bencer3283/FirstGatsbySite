import * as React from 'react';
import { Link } from 'gatsby';
import { 
    container,
    heading,
    navLinks,
    navLinkItem } from './components/layout.module.css';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className={container}>
                <nav>
                    <ul className={navLinks}>
                        <li className={navLinkItem}><Link to='/'>Home</Link></li>
                        <li className={navLinkItem}><Link to='/about'>About</Link></li>
                    </ul>
                </nav>
                <main>
                    <h1 className={heading}>{this.props.pageTitle}</h1>
                    {this.props.children}
                </main>
            </div>
        )
    }
};

export default Layout;