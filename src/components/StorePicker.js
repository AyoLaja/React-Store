import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
 //Constructor runs when the component is created
// constructor() {
//   //Super runs react component
//   super();
//   this.goToStore = this.goToStore.bind(this);
// }

componentWillMount() {
  console.log(React.PropTypes)
  console.log(this.context)
}

  goToStore(event) {
    event.preventDefault();
    console.log('You changed the url');
    //Grab text from textbox
    //const value = 
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`);
    //Transition to next URL (from store to store)
    this.context.router.transitionTo(`/store/${storeId}`)
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        {/* Render is bound to the component so 'this' is going 
        to be equal to StorePicker component */}
        <h2>Enter a store name</h2>
        <input type="text" placeholder="Store Name" 
        defaultValue={getFunName()} ref={(input)=>{this.storeInput = input}} required/>
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

StorePicker.contextTypes= {
  router: React.PropTypes.object.isRequired
}

export default StorePicker;