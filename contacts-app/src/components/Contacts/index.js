import React, { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";
import {} from "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {id: 1, fullname: "Mirac", phoneNumber: "555555" },
    {id: 2, fullname: "Yagmur", phoneNumber: "818181" },
    {id: 3, fullname: "Emrah", phoneNumber: "242424" },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  const handleRemoveContact = (contactToRemove) => {
    setContacts(contacts.filter(contact => contact !== contactToRemove));
  };

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts}  onRemoveContact={handleRemoveContact}/>
      <Form addContact={setContacts} contacts={contacts}></Form>
    </div>
  );
}

export default Contacts;
