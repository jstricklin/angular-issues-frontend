import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const moment = require('moment');

class IssueThumb extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='issue'>
                <div className='issue-header border-bottom p-0 pb-1 m-0 d-flex justify-content-between'>
                    <div className='issue-thumb-data mr-3 text-left'>
                        <p><span className='text-muted'>Issue: </span>{this.props.issue.title}</p>
                        <p><span className='text-muted'>Created: </span>{moment(this.props.issue.created_at).fromNow()}</p>
                        <p><span className='text-muted'>Updated: </span>{moment(this.props.issue.updated_at).fromNow()}</p>
                    </div>
                    <div className='user'><p><span className='text-muted'>User: </span> {this.props.issue.user.login}</p><img src={this.props.issue.user.avatar_url} className='user-avatar' alt="user avatar" /></div>
                </div>
                <Link to={`${this.props.issue.id}`}>Click here for more info</Link>
            </div>
            );
}
}

export default IssueThumb;

