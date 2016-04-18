import React from 'react';

class Contact extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="content-body">
                <h1>Contact</h1>
                <p>
                    Email us at <a href="admin@sensutec.com">admin@sensutec.com</a>.
                </p>
            </div>
        )
    }
}

export default Contact;