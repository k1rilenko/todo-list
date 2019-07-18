import React from 'react';
import './app-header.css';
import DonePanel from '../done-panel/done-panel';
const AppHeader = () => {
    return (
        <div className="app-header">
            <h1>Todo list</h1>
            <DonePanel />
        </div>
    )
};
export default AppHeader;