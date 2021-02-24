import React, { Component } from 'react'

import './AddressBook.css'
import Card from './Card'

class AddressBook extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: [
        {
          name: 'Jane Smith',
          initials: 'JS',
          favorite: true,
          phone: '222-222-2222',
          email: 'jane@email.com'
        },
        {
          name: 'Sarah Carter',
          initials: 'SC',
          favorite: false,
          phone: '222-111-1234',
          email: 'sarah@email.com'
        },
        {
          name: 'Mike Pearson',
          initials: 'MP',
          favorite: false,
          phone: '333-222-2233',
          email: 'mike@email.com'
        }
      ]
    }

    this.handleFavoriteToggle = this.handleFavoriteToggle.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    const prevStateString = JSON.stringify(prevState.contacts)
    const updatedStateString = JSON.stringify(this.state.contacts)

    if (prevStateString !== updatedStateString) {
      console.log("Save this:", updatedStateString)
      localStorage.setItem('contacts', updatedStateString)
    }
  }

  componentDidMount() {
    const savedStateFromLocalStorage = localStorage.getItem('contacts')

    if (savedStateFromLocalStorage) {
      this.setState({
        contacts: JSON.parse(savedStateFromLocalStorage)
      })
    }
  }

  handleFavoriteToggle(contactIndex) {
    const newContactsState = [...this.state.contacts]
    newContactsState[contactIndex] = {
      ...newContactsState[contactIndex],
      favorite: !newContactsState[contactIndex].favorite
    }

    this.setState({
      contacts: newContactsState
    })
  }

  render() {
    const {
      contacts
    } = this.state

    return (
      <>
      <h3>Address Book</h3>
      { !contacts.length && <p>No contacts!</p> }

      {contacts.map((contact, index) => {
        return (
          <Card
            contact={contact}
            handleFavoriteToggle={this.handleFavoriteToggle}
            index={index}
            key={index}
            />
        )
      })}
      </>
    )
  }
}

export default AddressBook;