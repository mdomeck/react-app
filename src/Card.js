import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="card-container">
          <header className="card-header">
            <span initials="JS"></span>
            <h2>Meghan Domeck</h2>
          </header>

          <main>
            <ul>
              <li><span>Birthday</span> Sept 3, 1977</li>
              <li><span>Address</span> 862 S. 5th St.</li>
              <li><span>Phone</span> 614-285-0533</li>
            </ul>
          </main>
        </section>
      </React.Fragment>
    )
  }
}

export default Card;