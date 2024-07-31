import React, { useState } from 'react'
import List from './List'
import Form from './Form'

function Contacts() {
    const [ contacts,setContacts]= useState( [] )
  return (
    <div>
        Contacts
        <List></List>
        <Form setContacts={setContacts}></Form>
    </div>
  )
}

export default Contacts
