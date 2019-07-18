import React from 'react';
import './app.css';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
const App = () => {

    const todoData = [
        {label: 'drink cofee', important: false, id: 1},
        {label: 'Make React App', important: true, id: 2},
        {label: 'Play with Troy', important: true, id: 3}
    ];

    return (
        <div className="app">
            <AppHeader />
            <SearchPanel />
            <TodoList todos= {todoData} />
        </div>
    )
}
export default App;