import React, { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";
import {} from "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Mirac", phoneNumber: "555555" },
    { fullname: "Yagmur", phoneNumber: "818181" },
    { fullname: "Emrah", phoneNumber: "242424" },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts}></Form>
    </div>
  );
}

export default Contacts;
