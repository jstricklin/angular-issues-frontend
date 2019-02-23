import React, { Component } from 'react';
import HeaderComponent from './components/Header.js'
import IssuesComponent from './components/Issues.js';
import logo from './logo.svg';
import './App.css';
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
                <div className='main container-flex pt-3'>
                    <div className='col-8 mx-auto'>
                        <div className='col-12 text-left border-bottom'><h2>Recent Angular Github Issues</h2></div>
                            { this.state.loading ? <h3>loading...</h3> : <IssuesComponent loading={this.state.loading} issues={this.state.issuesArr} /> }
                    </div>
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
