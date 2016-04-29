import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router';

import Nav from './components/nav/Nav.js';
import Home from './components/home/Home.js';
import Cortext from './components/cortext/Cortext.js';
import AboutUs from './components/about-us/AboutUs.js';
import Contact from './components/contact/Contact.js';
import Blog from './components/blog/Blog.js';

class Container extends React.Component {
    render() {
        return (
            <div className="content">
                <Nav />
                <div className="content-inner">
                    {this.props.children}
                </div>
                <footer>© Copyright 2016 Sensutec, LLC.</footer>
            </div>
        )
    }
}

class App extends React.Component {
    render(){
        return (
            <Router history={ browserHistory }>
                <Route component={Container}>
                    <Route path="/" component={Home}></Route>
                    <Route path="cortext" component={Cortext}></Route>
                    <Route path="about-us" component={AboutUs}></Route>
                    <Route path="contact-us" component={Contact}></Route>
                    <Route path="blog" component={Blog}></Route>
                </Route>
            </Router>
        )
    }
}

export default App;
