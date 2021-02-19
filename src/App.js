import React, { Component } from 'react';

import InputEvents from './events/InputEvents'
import MovementEvents from './events/MovementEvents'
import FormValidation from './FormValidation'
import './events/Events.css'
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Card/>
        < InputEvents/>
        < MovementEvents/>
        <FormValidation/>
      </div>
    );
  }
}

export default App;
