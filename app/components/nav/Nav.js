import React from 'react';
import { Link, IndexLink } from 'react-router';
import Links from './nav-config.js';
import Logo from '../logo/Logo.js';

class Nav extends React.Component {

    render(){
        
        return (
            <div className="nav">
                <nav className="nav__max-width">
                    <Link to="/" className="nav__brand">
                        <Logo />
                    </Link>
                    <div className="nav__right">
                        {Links.map((link, i) =>
                            <Link to={link.url} key={i} className="nav__tab" activeClassName="active">
                                <div className="nav__text">{link.name}</div>
                                <div className="nav__svg--wrapper">
                                    <svg viewBox="0 0 40 40" className="nav__svg">
                                        <g>
                                            <path d={link.path} />
                                        </g>
                                    </svg>
                                </div>
                            </Link>
                        )}
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav;