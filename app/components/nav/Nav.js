import React from 'react';
import { Link, IndexLink } from 'react-router';
import Links from './NavConfig.js';

class Nav extends React.Component {

    render(){
        
        return (
            <nav className="nav">
                {Links.map(function(link, i) {
                    return <Link key={i} to={link.url} className={link.linkClassName} activeClassName={link.activeClassName}>
                        <div className={link.textClassName}>{link.name}</div>
                        <svg viewBox="0 0 40 40" className="nav__svg">
                            <g className="nav__g">
                                <path className="st0" d={link.path} />
                            </g>
                        </svg>
                    </Link>;
                }.bind(this))}
            </nav>
        )
    }
}

export default Nav;