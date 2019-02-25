import React from 'react';
import IssuesComponent from './Issues.js';
const queryString = require('query-string');
const spinner = require('../assets/Spinner-1s-200px.svg')

const btnStyle = 'btn btn-secondary mx-1'

const Home = (props) => (
    <div className='col-8 mx-auto'>
        <div className='col-12 text-left p-0 pt-5 pb-3 content-title border-bottom '><h5>Recent Angular Github Issues</h5></div>
        <div className="page-nav mt-3 d-flex justify-content-center align-items-center">
            <button className={ props.page.first ? btnStyle : btnStyle + ' disabled'} onClick={() => props.loadPage('first', !props.page.first)}><p>&lt;&lt; first</p></button>
            <button className={ props.page.prev ? btnStyle : btnStyle + ' disabled' } onClick={() => props.loadPage('prev', !props.page.prev)}><p>&lt; prev</p></button>
            <p className='m-0 mx-3 p-0'>Page {props.page.next ? props.page.next.page - 1 : props.page.prev ? +props.page.prev.page + 1 : null } of {props.page.last ? props.page.last.page : props.page.prev ? +props.page.prev.page + 1 : null } </p>
            <button className={ props.page.next ? btnStyle : btnStyle + ' disabled' } onClick={() => props.loadPage('next', !props.page.next)}><p>next &gt;</p></button>
            <button className={ props.page.last ? btnStyle : btnStyle + ' disabled' } onClick={() => props.loadPage('last', !props.page.last)}><p>last &gt;&gt;</p></button>
        </div>
        { props.loading ? <img className='mt-5 loading' src={spinner} alt='loading...'/> : <IssuesComponent loading={props.loading} fragment={props.location.hash} issues={props.issues} /> }
    </div>
);
export default Home;
