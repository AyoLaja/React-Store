import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Item from './Item';
import { boots } from '../sample-boots';
import base from '../base';

class App extends Component {
    constructor() {
        super();
        this.addItem = this.addItem.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.removeFromOrder = this.removeFromOrder.bind(this);
        //Initialize state
        this.state = {
            items: {},
            order: {}
        }
    } 

    componentWillMount() {
        //This runs right before the app is rendered
        this.ref = base.syncState(`${this.props.params.storeId}/boots`, 
        {
            context: this,
            state: 'items'
        });

        //Check if there is any order in local storage
        const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

        if(localStorageRef) {
            //Update App component order state
            this.setState({
                order: JSON.parse(localStorageRef)
            });
        }
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Somethign changed');
        console.log({nextProps, nextState});
        localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
    }

    addItem(item) {
        //Update state
        const items = {...this.state.items};
        //Add in new item
        const timestamp = Date.now();
        items[`item-${timestamp}`] = item;
        //Set state
        this.setState({ items });
    }

    updateItem(key, updatedItem) {
        //Get copy of exsiting state
        const items = {...this.state.items};
        items[key] = updatedItem;
        this.setState({
            items
        });
    }

    removeItem(key) {
        const items = {...this.state.items};
        items[key] = null;
        this.setState({
            items
        })
    }

    loadSamples() {
        console.log(this.state.items);
        this.setState({
            items: boots
        });
    }

    addToOrder(key) {
        //Take a copy of state 
        const order = {...this.state.order};
        //Update or add new number of boots ordered
        order[key] = order[key] + 1 || 1;
        //Update State
        this.setState({ order });
    }

    removeFromOrder(key) {
        const order = {...this.state.order};
        delete order[key];
        this.setState({
            order
        })
    }

    render() {
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Soccer Store"/>
                    <ul className="list-of-boot">
                        {
                            Object
                                .keys(this.state.items)
                                //Cannot pass down key because key is for React, use index instead.
                                .map(key => <Item key={key} index={key} details={this.state.items[key]} addToOrder={this.addToOrder}/>)
                        }
                    </ul>
                </div>
                <Order 
                    boots={this.state.items} 
                    order={this.state.order} 
                    params={this.props.params}
                    removeFromOrder={this.removeFromOrder}/>
                {/*Pass addItem and loadSamples ass props to be accessed by the Inventory component*/}
                <Inventory 
                    items={this.state.items} 
                    addItem={this.addItem} 
                    loadSamples={this.loadSamples}
                    updateItem={this.updateItem}
                    removeItem={this.removeItem}/>
            </div>
        );
    }
}

export default App;