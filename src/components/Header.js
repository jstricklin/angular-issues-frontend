import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div className='header position-fixed d-flex align-items-center justify-content-center p-3'>
                <div className='d-flex col-10 justify-content-between align-items-center'>
                    <h3 className='title'>Angular Issues Tracker</h3>
                    <p>A Coding Assessment for Levels Beyond</p>
                </div>
            </div>
            );
    }
}

export default HeaderComponent;
