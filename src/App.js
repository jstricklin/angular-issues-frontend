import React, { Component } from 'react';
import HeaderComponent from './components/Header.js'
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
                <div className='main pt-3'>
                    <div className='container-flex'>
                        <div className='col-12'><h2>Recent Angular Github Issues</h2></div>
                        <div className='issues-container col-8 mx-auto d-flex justify-content-center flex-wrap'>
                            { this.state.loading ? <h3>loading...</h3> : this.state.issuesArr.map(issue => <div className='issue' key={issue.id}>{issue.title}</div>) }
                        </div>

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
