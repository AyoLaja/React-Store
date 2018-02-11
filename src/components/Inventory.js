import React, { Component } from 'react';
import AddItemForm from './AddItemForm';

class Inventory extends Component {
    render() {
        return(
            <div>
                <h2>Inventory</h2>
                {/*Access addItem and loadSamples via props passed down from App.js*/}
                <AddItemForm addItem={this.props.addItem}/>
                <button onClick={this.props.loadSamples}>Load Sample Items</button>
            </div>
        );
    }
}

export default Inventory;