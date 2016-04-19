import React from 'react';
import Logo from '../logo/Logo.js';

class Home extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="home-container">
                <div className="logo">
                    <Logo />
                    <h1 className="logo__name">Sensutec</h1>
                </div>
                <p className="logo__text">Bringing organic intelligence to artificial systems.</p>
            </div>
        )
    }
}

export default Home;