import React, {Component} from 'react';
import './search-panel.css';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };
    render() {
        const {filter, onFilterChange} = this.props;
        return (
            <div className="search-panel">
                <input className="form-control" placeholder="search" value={this.state.term} onChange={this.onSearchChange}/>
                <ItemStatusFilter  filter={filter} onFilterChange={onFilterChange}/>
            </div>   
        )
    };  
};