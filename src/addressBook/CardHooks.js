import React, { useState, useEffect } from 'react'

const Card = () => {
const [initials, setInitials] = useState("MD")
const [name, setName] = useState("Meghan Domeck")
const [phone, setPhone] = useState("222-222-2222")
const [email, setEmail] = useState("me@email.com")
const [favorite, setFavorite] = useState(false)

useEffect(() => {
  console.log(`Value has changed to: ${favorite}`)
  // save to local storage, make API calls, DOM interactions, etc.
})

  const activeClass = favorite ? 'active' : ''

 return (
   <section className="card-container">
     <header className="card-header">
       <span initials={initials}></span>
       <h2>{name}</h2>
       <div 
         className = {`favorite ${activeClass}`}
         onClick={() => { setFavorite(!favorite) }}
         >
         ☆
       </div>
     </header>

     <main>
       <ul>
         <li>
           <span>Phone</span>
           {phone ? phone : 'n/a'}
         </li>
         <li>
           <span>Email</span>
           {email ? email : 'n/a'}
         </li>
       </ul>
     </main>
   </section>
 )
}

export default Card