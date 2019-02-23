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
                <div className='issue-header border-bottom p-0 m-0'>
                    <p>{this.props.issue.title}</p>
                </div>
                { this.props.pathID == this.props.issue.id ?
                <div className='issue-body'>
                    <Link to='/'>Back</Link>
                    <p>{this.props.issue.body}</p>
                </div> :
                <Link to={`${this.props.issue.id}`}>Click here for more info</Link>
                }
            </div>
            );
}
}

export default IssueComponent;
