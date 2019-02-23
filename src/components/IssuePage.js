import React from 'react';
import Issue from './Issue.js'

const IssuePage = (props) => {
    const id = props.location.pathname.slice(1)
    const issue = props.issues.filter(issue => issue.id === +id )[0]
    console.log('issue', issue);
    return (
        <div className='col-8 mx-auto'>
            <div className='col-12 text-left p-0 border-bottom'><h2>Issue ID: {id}</h2></div>
            { issue ? <Issue pathID={id} issue={issue} /> : <h1>Loading Issue...</h1> }
        </div>
    );
}

export default IssuePage;
