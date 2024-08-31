import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './layout';
import { HashRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Router>
    <Layout />
</Router>);