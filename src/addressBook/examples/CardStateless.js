import React from 'react'

const styles = {
  border: '1px solid black',
  margin: '20px',
  textAlign: 'center'
}

const CardStateless = (props) => {
  const fullName = 'Lasha Stateless'

  return (
    <section style={styles}>
      <h1>Hello, {fullName}</h1>
      <p>Favorite food: {props.food}</p>
    </section>
  )
}

export default CardStateless