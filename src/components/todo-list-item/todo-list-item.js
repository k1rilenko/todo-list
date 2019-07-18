import React from 'react';
import './todo-list-item.css'
const TodoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'tomato' : 'green'
    }
    return(
        <div className="todo-list-item">
            <span className="todo-list-item-label" style={style}>{label}</span>
            <div className="button__group">
                <button className="btn btn-outline-success btn-sm" type="button"> <i className="fa fa-exclamation"></i></button>
                <button className="btn btn-outline-danger btn-sm"type="button"><i className="fa fa-trash-o"></i></button>
            </div>
        </div>
    ) 
};
export default TodoListItem;
