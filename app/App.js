import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import Logo from './components/logo/Logo.js';
import Nav from './components/nav/Nav.js';
import OurVision from './components/our-vision/OurVision.js';
import OurApplication from './components/our-application/OurApplication.js';

class Container extends React.Component {
    render() {
        return (
            <div className="content">
                <Logo />
                {this.props.children}
                <Nav />
            </div>
        )
    }
}

class App extends React.Component {
    render(){
        return (
            <Router history={ browserHistory }>
                <Route path="/" component={Container}>
                    <IndexRedirect to="/our-vision" />
                    <Route path="our-vision" component={OurVision}></Route>
                    <Route path="our-application" component={OurApplication}></Route>
                </Route>
            </Router>
        )
    }
}

export default App;
