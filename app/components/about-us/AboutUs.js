import React from 'react';
import items from './about-us-config.js';

class Cortext extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="content-body">
                <h1>About Us</h1>
                <p>
                    We believe in a future driven by on-demand, usable, relevant information. Today's data rich environment gives people the resources to make informed decisions, but not the tools. Our diverse backgrounds and unique worldviews allow us to see end users of data as interpreters, not simply an engines of computation. We apply this thinking to our advanced research tools, easy to use interfaces, and detailed data analytics to redefine the way people read, research, and learn.
                </p>
                    
                    {items.map((item, i) => {
                        return <div key={i} className="profile">
                            <div className={'profile__pic ' + item.className}></div>
                            <div className="profile__flex-right">
                                <h3 className="profile__name">{item.name}</h3>
                                <p className="profile__title">{item.title}</p>
                            </div>
                        </div>
                    })}
                
            </div>
        )
    }
}

export default Cortext;