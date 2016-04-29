import React from 'react';

class Cortext extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="content-body">
                <h1>Stop Searching. Start Finding.</h1>
                <p>
                    Research is a tedious process. Large volumes of unstructured data, distributed across multiple sources, have made finding useful information harder than ever.
                </p>
                <p>
                    Our web application, Cortext, uses semantic data interpretation to help you gather trends, hone in on specifics, and determine paths forward. You can produce a wide range of useful visualizations, as well as output data in many common data formats (like CSV and JSON). This data becomes yours to include in a report or use to take on your next big project.
                </p>
            </div>
        )
    }
}

export default Cortext;