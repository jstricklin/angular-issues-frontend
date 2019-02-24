import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class IssueThumb extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='issue'>
                <div className='issue-header border-bottom p-0 m-0 d-flex justify-content-around align-items-center'>
                    <p><span className='text-muted'>Issue: </span>{this.props.issue.title}</p><div className='m-1 user'><p>{this.props.issue.user.login}</p><img src={this.props.issue.user.avatar_url} className='user-avatar' alt="user avatar" /></div>
                </div>
                <Link to={`${this.props.issue.id}`}>Click here for more info</Link>
            </div>
            );
}
}

export default IssueThumb;

