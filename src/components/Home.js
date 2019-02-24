import React from 'react';
import IssuesComponent from './Issues.js';
const queryString = require('query-string');
const Home = (props) => (
    <div className='col-8 mx-auto'>
        <div className='col-8 text-left py-4 content-title border-bottom '><h2>Recent Angular Github Issues</h2></div>
        { props.loading ? <h3>loading...</h3> : <IssuesComponent loading={props.loading} fragment={props.location.hash} issues={props.issues} /> }
    </div>
);
export default Home;
