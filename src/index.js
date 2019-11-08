// let's go!
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Routes } from './routes'

import './css/style.css';

const Root = () => {
    return (
        <Router>
            <div>
                <Link to="/">Home</Link>
                <Link to={{pathname: '/store'}}>Home</Link>
                {Routes}
            </div>
        </Router>
    );
}

render(<Root/>, document.querySelector("#main"));