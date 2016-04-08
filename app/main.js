import React from 'react';
import ReactDOM from 'react-dom';
import {HelloWorld} from 'app/components/hello-world';

let container = document.getElementById('root');
let component = ReactDOM.render(React.createElement(HelloWorld), container);