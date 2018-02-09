import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import fishes from '../sample-fishes';

class App extends Component {
    constructor() {
        super();
        this.addItem = this.addItem.bind(this);
        this.loadSampples = this.loadSamples.bind(this);
        //Initialize state
        this.state = {
            items: {},
            order: {}
        }
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

    loadSamples() {
        this.setState({
            items: fishes
        });
    }

    render() {
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Soccer Store"/>
                </div>
                <Order/>
                <Inventory addItem={this.addItem} loadSamples={this.loadSamples}/>
            </div>
        );
    }
}

export default App;