import React, { Component } from 'react';
import './todo-list-item.css'

 export default class TodoListItem extends Component {

   render() {
        const {label, onDeleted, onToggleImportant, onToggleDone, important, done} = this.props;
        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }
        return(
            <div className={classNames}>
                <span className="todo-list-item-label" onClick={ onToggleDone }>{label}</span>
                <div className="button__group">
                    <button className="btn btn-outline-success btn-sm" type="button" onClick={onToggleImportant}> <i className="fa fa-exclamation"></i></button>
                    <button className="btn btn-outline-danger btn-sm"type="button" onClick={onDeleted}><i className="fa fa-trash-o"></i></button>
                </div>
            </div>
        )    
    }
};


