import React, { Component } from 'react';
import HeaderComponent from './components/Header.js'
import IssuesComponent from './components/Issues.js';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import ConfiguredRouter from './Router.js';

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
        return fetch(baseURL)
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
