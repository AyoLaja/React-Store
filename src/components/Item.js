import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Item extends Component {
    render() {
        //JS destructuring (refer to Wes Bos blogs)
        const { details, index } = this.props; //Same as const details = this.props.details
        const isAvailable = details.status === 'available';
        const buttonText = isAvailable ? 'Add To Order' : 'Sold Out!';

        return(
            <li className="menu-boot">
                <img src={details.image} alt={details.name}/>
                <h3 className="boot-name">
                    {details.name}
                    <span className="price">{formatPrice(details.price)}</span>
                    </h3>
                    <p>{details.desc}</p>
                    <button disabled={!isAvailable} onClick={() => this.props.addToOrder(index)}>{buttonText}</button>
                <span></span>
            </li>
        );
    }
}

export default Item;