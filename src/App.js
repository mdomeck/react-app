import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

// import AddressBook from './addressBook/AddressBook'
import './reset.css'
import './Default.css'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'

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
  constructor(props) {
    super(props)

    this.state = {
      authenticated: false
    }

    this.doLogIn = this. doLogIn.bind(this)
    this.doLogOut = this.doLogOut.bind(this)
  }

  doLogIn() {
    this.setState({
      authenticated: true 
    })
  }

  doLogOut() {
    this.setState({
      authenticated: false 
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about"> About</Link></li>
            <li><Link to="/about/123"> About Meghan</Link></li>
            <li><Link to="/contact"> Contact</Link></li>
          </ul>
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/" render={() => {
              return (
                this.state.authenticated ? (
                  <Redirect to="/account" />
                ) : (
                  <>
                  <Home />
                  <p>Please log in!</p>
                  <button onClick={this.doLogIn}>Log In</button>
                  </>
                )
              )
            }} />

            <Route path="/account" render={() => {
              return (
                this.state.authenticated ? (
                  <>
                  <Home />
                  <p>Welcome back</p>
                  <button onClick={this.doLogOut}>Log out</button>
                  </>
                ) : (
                  <Redirect to="/" />
                )
              )
            }} />

            <Redirect from="/about/:userId" to="/info/:userId" />
            <Route path="/info/:userId" component={About} />

            <Redirect from="/about" to="/info" />
            <Route path="/info" component={About} />

            <Route path="/contact" component={Contact} />

            <Route component={Error} />

          </Switch>
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
