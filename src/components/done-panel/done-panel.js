import React from 'react';
import './done-panel.css';

const DonePanel = ({done,toDo}) => {
    return (
        <div className="done-panel">
            <span> {toDo} more to do,</span>
            <span> {done} done </span>
        </div>
    )
};
export default DonePanel;