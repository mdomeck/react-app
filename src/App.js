import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

// import AddressBook from './addressBook/AddressBook'
import './Default.css'

import CardHooks from './addressBook/CardHooks'

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
        <h1>Hello world!</h1>
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about"> About</Link></li>
            <li> <Link to="/contact"> Contact</Link></li>
          </ul>    

          <Route exact path="/" render={() => {
            return <h2>Home page</h2>
          }} />

          <Route path="/about" render={() => {
            return <h2>About page</h2>
          }} />

          <Route path="/contact" render={() => {
            return <h2>Contact page</h2>
          }} />
        </Router>
          
      
        {/* <CardHooks /> 
        <AddressBook />
        <CardStateful food="Pizza" />
        <CardStateless food="Ramen" />
        <ShoppingList />
        <Card />
        <InputEvents />
        <MovementEvents />
        <FormValidation /> */}
      </div>
    );
  }
}

export default App;
