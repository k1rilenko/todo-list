import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item'
import './todo-list.css';
const TodoList = ({todos,onDeleted, onToggleImportant, onToggleDone}) => {
    const elements = todos.map((item) => {
        const {id} = item;
        return (
            <li className="list-group-item"  key={id}>
                <TodoListItem done={item.done} label={item.label} important={item.important} onDeleted={() => onDeleted(id)}onToggleImportant={() => onToggleImportant(id)} onToggleDone={() => onToggleDone(id)} />
            </li>
        )
    }) 

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    )
};
export default TodoList;