import React, { Component } from 'react';

class AddItemForm extends Component {
    createItem(event) {
        event.preventDefault();
        console.log('Soccer time! ');
        const item = {
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            desc: this.desc.value,
            image: this.image.value
        }
        this.props.addItem(item);
        this.itemForm.reset();
    }

    render() {
        return(
            <form ref={(input) => this.itemForm = input}className="boot-edit" onSubmit={(e) => this.createItem(e)}>
                <input ref={(input) => this.name = input} type="text" placeholder="Item Name"/>
                <input ref={(input) => this.price = input} type="text" placeholder="Item Price"/>
                <select ref={(input) => this.status = input}>
                    <option value="available">Available</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea ref={(input) => this.desc = input} placeholder="Item Description"></textarea>
                <input ref={(input) => this.image = input} type="text" placeholder="Item Image"/>
                <button type="submit">+ Add Item</button>
            </form>
        );
    }
}

export default AddItemForm;