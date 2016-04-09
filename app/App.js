import React from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import Logo from './components/logo/Logo.js';
import Nav from './components/nav/Nav.js';
import OurVision from './components/our-vision/OurVision.js';
import OurApplication from './components/our-application/OurApplication.js';

const Container = (props) => 
    <div className="content">
        <Logo />
        <Nav />
        {props.children}
    </div>;

class App extends React.Component {
    render(){
        return (
            <Router history={ hashHistory }>
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
