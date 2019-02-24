import React from 'react';
import Issue from './Issue.js'

const IssuePage = (props) => {
    const id = props.location.pathname.slice(1)
    const issue = props.issues.filter(issue => issue.id === +id )[0]
    console.log('issue', issue);
    return (
        <div className='col-8 mx-auto'>
            <div className='col-12 d-flex p-0 m-3 justify-content-between border-bottom'><h3>Issue ID: {id}</h3><h3>{issue ? issue.title : null}</h3></div>
            { issue ? <Issue pathID={id} issue={issue} /> : <h1>Loading Issue...</h1> }
        </div>
    );
}

export default IssuePage;
