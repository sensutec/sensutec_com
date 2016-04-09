import React from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends React.Component {
    render(){
        return (
            <nav className="nav">
                <Link to="/our-vision" className="nav__link" activeClassName="active">
                    Our Vision
                </Link>
                <Link to="/our-application" className="nav__link" activeClassName="active">
                    Our Application
                </Link>
            </nav>
        )
    }
}

export default Nav;