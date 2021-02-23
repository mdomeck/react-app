import React, { Component } from 'react';

import AddressBook from './addressBook/AddressBook'

import CardStateful from './addressBook/examples/CardStateful'
import CardStateless from './addressBook/examples/CardStateless'

import ShoppingList from './shoppingList/ShoppingList.js'
import './shoppingList/ShoppingList.css'

import InputEvents from './events/InputEvents'
import MovementEvents from './events/MovementEvents'
import FormValidation from './FormValidation'
import './events/Events.css'
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddressBook />
        <CardStateful food="Pizza" />
        <CardStateless food="Ramen" />
        <ShoppingList/>
        <Card/>
        <InputEvents/>
        <MovementEvents/>
        <FormValidation/>
      </div>
    );
  }
}

export default App;
