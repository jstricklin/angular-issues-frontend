import React from 'react';
import IssuesComponent from './Issues.js';

const Home = (props) => (
    <div className='col-8 mx-auto'>
        <div className='col-12 text-left p-0 border-bottom'><h2>Recent Angular Github Issues</h2></div>
        { props.loading ? <h3>loading...</h3> : <IssuesComponent loading={props.loading} issues={props.issues} /> }
    </div>
);
export default Home;
