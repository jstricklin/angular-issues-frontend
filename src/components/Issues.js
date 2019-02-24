import React, { Component } from 'react';
import IssueThumb from './IssueThumb.js';

class IssuesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='issues-container col-12 mx-auto d-flex justify-content-center flex-wrap'>
                { this.props.issues.map(issue => <div key={issue.id} style={{width: "250px", margin: "1em"}}><IssueThumb fragment={this.props.fragment} issue={issue}/></div>) }
            </div>
            );
}
}

export default IssuesComponent;
