import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props){
    super(props)

    this.state = {
      firstName: 'Meghan Domeck',
      initials: 'MD',
      info: [
        { title: 'Birthday', text: 'August 22, 1920' },
        { title: 'Address', text: '123 Seasame St' },
        { title: 'Phone', text: '222-222-2222' },
        { title: 'Email', text: 'bigbird@email.com' }
      ]
    }
  }
  render() {
    const {
      firstName,
      initials,
      info
    } = this.state
    return (
      <React.Fragment>
        <section className="card-container">
          <header className="card-header">
            <span initials={initials}></span>
            <h2>{ firstName }</h2>
          </header>

          <main>
            <ul>
              {info.map((row, index) => {
                return (
                  <li key={index}>
                    <span>{row.title}</span>
                    {row.text ? row.text : 'n/a'}
                  </li>
                )
              })}
            </ul>
          </main>
        </section>
      </React.Fragment>
    )
  }
}

export default Card;