import React from 'react';
import './item-status-filter.css';

const ItemStatusFilter = () => {
    return (
        <div className="item-status-filter btn-group">
            <button className="btn btn-info" type="button">All</button>
            <button className="btn btn-outline-secondary" type="button">Active</button>
            <button className="btn btn-outline-secondary" type="button">Done</button>
        </div>
    )
}
export default ItemStatusFilter;