import React from 'react';
import { Link, IndexLink } from 'react-router';
import Links from './NavConfig.js';

class Nav extends React.Component {

    render(){
        
        return (
            <nav className="nav">
                {Links.map(function(link, i) {
                    return <Link to={link.url} key={i} className="nav__tab" activeClassName="active">
                        <div className="nav__text">{link.name}</div>
                        <div className="nav__svg--wrapper">
                            <svg viewBox="0 0 40 40" className="nav__svg">
                                <g>
                                    <path d={link.path} />
                                </g>
                            </svg>
                        </div>
                    </Link>
                })}
            </nav>
        )
    }
}

export default Nav;