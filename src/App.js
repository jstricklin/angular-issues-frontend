import React, { Component } from 'react';
import HeaderComponent from './components/Header.js'
import IssuesComponent from './components/Issues.js';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import ConfiguredRouter from './Router.js';

const parse = require('parse-link-header');
const moment = require('moment');

const baseURL = "https://api.github.com/repos/angular/angular/issues";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issuesArr: [],
            loading: true,
            page: {},
        }
        this.loadPage = this.loadPage.bind(this);
    }
    loadPage(page) {
        this.setState({ loading: true });
        return fetch(this.state.page[page].url)
            .then(res => {
                let page = parse(res.headers.get('Link'));
                this.setState(prev => ({
                    page: page,
                }));
                return res.json();
            })
            .then(json => {
                this.setState(prev => ({
                    issuesArr: json,
                    loading: false
                }));
            })
    }
    componentDidMount() {
        const date = new Date();
        date.setDate(date.getDate() - 7);
        const dateParam = moment(date).toISOString();
        return fetch(`${baseURL}?since=${dateParam}&sort=created`)
            .then(res => {
                let page = parse(res.headers.get('Link'));
                this.setState(prev => ({
                    page: page,
                }));
                return res.json();
            })
            .then(json => {
                this.setState(prev => ({
                    issuesArr: json,
                    loading: false
                }));
            })
    }
    render() {
        return (
            <div className="App">
                <HeaderComponent />
                <div className='main pt-5 container-flex pt-3'>
                    <ConfiguredRouter page={this.state.page} loadPage={this.loadPage} loading={this.state.loading} issues={this.state.issuesArr} />
                </div>
            </div>
            );
    }
}

export default App;
