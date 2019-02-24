import React, { Component } from 'react';
import HeaderComponent from './components/Header.js'
import IssuesComponent from './components/Issues.js';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import ConfiguredRouter from './Router.js';

const moment = require('moment');

const baseURL = "https://api.github.com/repos/angular/angular/issues";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issuesArr: [],
            loading: true
        }
    }
    render() {
        return (
            <div className="App">
                <HeaderComponent />
                <div className='main pt-5 container-flex pt-3'>
                    <ConfiguredRouter loading={this.state.loading} issues={this.state.issuesArr} />
                </div>
            </div>
            );
    }
    componentDidMount() {
        const date = new Date();
        date.setDate(date.getDate() - 7);
        const dateParam = moment(date).toISOString();
        return fetch(`${baseURL}?since=${dateParam}&sort=created`)
            .then(res => res.json())
            .then(json => {
                this.setState(prev => ({
                    issuesArr: json,
                    loading: false
                }));
            })
    }
}

export default App;
