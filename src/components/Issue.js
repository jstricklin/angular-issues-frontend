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
                <Link to='/'><button className='btn btn-secondary'><p>&lt; Back</p></button></Link>
                <div className='issue-header border-bottom p-0 m-0 d-flex justify-content-around align-items-center'>
                    <div className='issue-info text-left'>
                        <p><span className='text-muted'>Issue: </span>{this.props.issue.title}</p>
                        <p><span className='text-muted'>Issue URL:</span> <a href={this.props.issue.html_url} target='_blank' >{this.props.issue.html_url}</a> </p>
                        <p><span className='text-muted'>State:</span> {this.props.issue.state}</p>
                    </div>
                    <div className='m-1 user'>
                        <h6>User ID</h6>
                        <a href={this.props.issue.user.html_url} target='_blank'>
                            <p>{this.props.issue.user.login}</p>
                            <img src={this.props.issue.user.avatar_url} className='user-avatar' alt="user avatar" />
                        </a>
                    </div>
                </div>
                <div className='issue-body mt-3 d-flex flex-wrap justify-content-around'>
                    <div className='assignees mx-1'>
                        <h5 className='text-center'>Assignees</h5>
                        <div className="d-flex my-3 flex-wrap justify-content-around">
                            { this.props.issue.assignee ? this.props.issue.assignees.map(assignee => (
                            <div className='m-1 user text-center'>
                                <a href={assignee.html_url} target='_blank'>
                                    <p>{assignee.login}</p>
                                    <img src={assignee.avatar_url} className='user-avatar' alt="user avatar" />
                                </a>
                            </div>
                            )) : <p className='text-center'>None</p> }
                        </div>
                    </div>
                    <div className='issue-body-text text-center mx-1'>
                        <h5>Issue Message</h5>
                        <p>{this.props.issue.body}</p>
                    </div>
                </div>
            </div>
            );
}
}

export default IssueComponent;
