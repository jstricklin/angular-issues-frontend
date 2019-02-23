import React, { Component } from 'react';

class IssueComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='issue'>
                <div className='issue-header'>
                    <p>{this.props.issue.title}</p>
                </div>
                <div className='issue-body'>
                    <p>{this.props.issue.body}</p>
                </div>
            </div>
            );
    }
}

export default IssueComponent;
