import React from 'react';
import Issue from './Issue.js'

const IssuePage = (props) => {
    const id = props.location.pathname.slice(1)
    const issue = props.issues.filter(issue => issue.id === +id )[0]
    console.log('issue', issue);
    return (
        <div className='col-8 mx-auto pt-4'>
            <div className='col-12 d-flex p-0 pt-3 pb-3 my-3 justify-content-between border-bottom'><h5>Issue ID: {id}</h5><h5>{issue ? issue.title : null}</h5></div>
            { issue ? <Issue pathID={id} issue={issue} /> : <h1>Loading Issue...</h1> }
        </div>
    );
}

export default IssuePage;
