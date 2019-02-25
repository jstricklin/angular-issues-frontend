import React from 'react';
import IssuesComponent from './Issues.js';
const queryString = require('query-string');
const Home = (props) => (
    <div className='col-8 mx-auto'>
        <div className='col-12 text-left p-0 pt-5 pb-3 content-title border-bottom '><h5>Recent Angular Github Issues</h5></div>
        <button onClick={() => this.loadPage('next')}>click!</button>
        { props.loading ? <h3>loading...</h3> : <IssuesComponent loading={props.loading} fragment={props.location.hash} issues={props.issues} /> }
    </div>
);
export default Home;
