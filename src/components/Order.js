import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Order extends Component {
    constructor() {
        super();
        this.renderOrder = this.renderOrder.bind(this);
    }

    renderOrder(key) {
        const boot = this.props.boots[key];
        const count = this.props.order[key];
        const removeButton = <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>

        if (!boot || boot.status === 'unavailable') {
            return <li key={key}>Sorry, {boot ? boot.name: 'this boot'} is no longer avilable!{removeButton}</li>
        }

        return (
                <li key={key}>
                    <span>{count}lbs {boot.name} {removeButton}</span>
                    <span className="price">{formatPrice(boot.price * count)}</span>
                </li>
        )
    }

    render() {
        const orderIds = Object.keys(this.props.order);
        //Reduce lets you loop over an array and add a bunch of stuff to it or return an object array
        const total = orderIds.reduce((prevTotal, key) => {
            const boot = this.props.boots[key];
            const count = this.props.order[key];
            const isAvailable = boot && boot.status === "available";
            if(isAvailable) {
                return prevTotal + (count * boot.price || 0)
            }
            return prevTotal;
        }, 0)
        return(
            <div className="order-wrap">
                <h2>Your Orders</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                    <li className="total">
                        <strong>Total:</strong>
                        {formatPrice(total)}
                    </li>
                </ul>
            </div>
        );
    }
}

export default Order;