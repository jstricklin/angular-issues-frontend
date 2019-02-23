import React, { Component } from 'react';
import IssueComponent from './Issue.js';

class IssuesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='issues-container col-12 mx-auto d-flex justify-content-center flex-wrap'>
                { this.props.loading ? <h3>loading...</h3> : this.props.issues.map(issue => <div className='issue' key={issue.id}>{issue.title}</div>) }
                <IssueComponent />
            </div>
            );
}
}

export default IssuesComponent;
