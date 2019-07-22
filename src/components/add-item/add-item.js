import React, {Component} from 'react';
import './add-item.css'

export default class AddItem extends Component {
    state = {
        label: ''
    };

    onLableChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.label === '') {
            return
        } else {
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ''
        });
        }
    };

    render() {
        return(
            <form className="add-item" onSubmit={this.onSubmit}>
                <input type="text" className="add-item__input form-control" placeholder="enter the text" onChange={this.onLableChange} value={this.state.label}/>
                <button className="add-item__button btn btn-primary" type="button" onClick={this.onSubmit}> Add Item</button>
            </form>
        );
    }
}