import React from 'react';
import './app-header.css';
import DonePanel from '../done-panel/done-panel';

const AppHeader = ({done,toDo}) => {
    return (
        <div className="app-header">
            <h1>Todo list</h1>
            <DonePanel done={done} toDo={toDo} />
        </div>
    )
};
export default AppHeader;