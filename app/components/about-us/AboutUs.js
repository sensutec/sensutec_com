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
                    We are a group of passionate individuals, interested in changing the way people look at and use large bodies of text. We are based in San Diego, California and have unique backgrounds ranging from Software Development, to Finance, to Philosophy. We are looking to apply a unique perspective to the way people look at news articles, research publications, and blog posts.
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