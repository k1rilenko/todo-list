import React, {Component} from 'react';
import './app.css';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import AddItem from '../add-item/add-item'

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Get a job'),
            this.createTodoItem('Make React App'),
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Study further')
        ],
        term: '',
        filter: 'all'
    };    
    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]; 
            return {
                todoData: newArr
            }
        })
    };

    createTodoItem(label) {
        return {
           label: label,
           important: false,
           done: false,
           id: this.maxId++ 
        }
    }

    addItem = (text) => {
       const newItem = this.createTodoItem(text)
        this.setState(({todoData}) => {
           const newArr =  [...todoData, newItem];
           return {
               todoData: newArr
           };
        });
        
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [...arr.slice(0, idx), newItem , ...arr.slice(idx + 1)];
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    }
    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    }

    search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;

        });
    }
    filter(items,filter) {
        switch(filter) {
            case 'all':
               return items;
            case 'active': 
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done); 
            default: 
                return items;
        }
    };
    onSearchChange = (term) => {
        this.setState({term});
    };
    onFilterChange = (filter) => {
        this.setState({filter});
    };
    
    render() {

        const {todoData, term, filter} = this.state;
        const visibleItem = this.filter(this.search(todoData, term), filter);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="app">
                <AppHeader done={doneCount} toDo={todoCount} />
                <SearchPanel onSearchChange={this.onSearchChange} filter={filter} onFilterChange={this.onFilterChange}/>
                <TodoList 
                        todos= { visibleItem }
                        onDeleted={ this.deleteItem } 
                        onToggleImportant ={this.onToggleImportant} 
                        onToggleDone={this.onToggleDone} 
                />
                <AddItem  onAddItem={this.addItem}/>
            </div>
        )
    }

};
