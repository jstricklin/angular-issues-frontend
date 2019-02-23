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
                { this.props.issues.map(issue => <IssueComponent fragment={this.props.fragment} key={issue.id} issue={issue}/>) }
            </div>
            );
}
}

export default IssuesComponent;
