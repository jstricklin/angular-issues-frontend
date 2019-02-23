import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                { this.props.location.seach === this.props.issue.id ?
                <div className='issue-body'>
                    <p>{this.props.issue.body}</p>
                </div> : "nada..." }
            </div>
            );
    }
}

export default IssueComponent;
