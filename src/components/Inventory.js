import React, { Component } from 'react';
import AddItemForm from './AddItemForm';

class Inventory extends Component {
    constructor() {
        super();
        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, key) {
        const item = this.props.items[key];
        //Take a copy of item and update it with the new data
        const updatedItem = {
            ...item, 
            [e.target.name]: e.target.value
        };
        this.props.updateItem(key, updatedItem);
        console.log(updatedItem);
    }

    renderInventory(key) {
        const item = this.props.items[key];
        return (
            <div className="boot-edit" key={key}>
                <input type="text" name="name" value={item.name} placeholder="Item Name" onChange={(e) => this.handleChange(e, key)}/>
                <input type="text" name="price" value={item.price} placeholder="Item Price" onChange={(e) => this.handleChange(e, key)}/>
                
                <select type="text" name="status" value={item.status} placeholder="Item status" onChange={(e) => this.handleChange(e, key)}> 
                    <option value="avalable">Available</option>
                    <option value="unavailable">Sold Out!</option>
                </select>

                <textarea type="text" name="desc" value={item.desc} placeholder="Fish Desc" onChange={(e) => this.handleChange(e, key)}></textarea>
                <input type="text" name="image" value={item.image} placeholder="Fish Image" onChange={(e) => this.handleChange(e, key)}/>
                <button onClick={() => this.props.removeItem(key)}>Remove item</button>
            </div>
        )
    }

    render() {
        return(
            <div>
                <h2>Inventory</h2>
                {Object.keys(this.props.items).map(this.renderInventory)}
                {/*Access addItem and loadSamples via props passed down from App.js*/}
                <AddItemForm addItem={this.props.addItem}/>
                <button onClick={this.props.loadSamples}>Load Sample Items</button>
            </div>
        );
    }
}

export default Inventory;