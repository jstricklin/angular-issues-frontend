import React from 'react';
import Issue from './Issue.js'

const IssuePage = (props) => {
    const issue = props.issues.filter(issue => issue.id == props.location.pathname.slice(1))[0]
    console.log(issue);
    return (
        // <Issue issue={issue} />
        <h1>TEST</h1>
    );
}

export default IssuePage;
