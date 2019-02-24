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
                <div className='issue-header border-bottom p-0 m-0 d-flex justify-content-around align-items-center'>
                    <div className='issue-info text-left'>
                        <p><span className='text-muted'>Issue: </span>{this.props.issue.title}</p>
                        <p><span className='text-muted'>Issue URL:</span> {this.props.issue.url}</p>
                        <p><span className='text-muted'>State:</span> {this.props.issue.state}</p>
                    </div>
                    <div className='m-1 user'>
                        <p>{this.props.issue.user.login}</p>
                        <img src={this.props.issue.user.avatar_url} className='user-avatar' alt="user avatar" />
                    </div>
                </div>
                <div className='issue-body'>
                    <Link to='/'>Back</Link>
                    <p>{this.props.issue.body}</p>
                </div>
            </div>
            );
}
}

export default IssueComponent;
