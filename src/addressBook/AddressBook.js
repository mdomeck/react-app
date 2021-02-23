import Reat, { Component } from 'react'

import './AddressBook.css'
import Card from './Card'

class ShoppingList extends Component {
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
            index={index}
            key={index}
            />
        )
      })}
      </>
    )
  }
}

export default ShoppingList;