import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [phone, setPhone] = useState('');
 const[duplicate, setDuplicate] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if(!duplicate){
    addContact(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
   };
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(()=>{
    const findDuplicate = () => {
      let found = contacts.find((contact) => contact.name === name);
      if (found){ 
        return true;
      } else {
        return false;
      };
    }

    findDuplicate() ? setDuplicate(true) : setDuplicate(false);
   
  },[name, contacts, duplicate])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        {duplicate ? 'Contact already exist': '' }
        <ContactForm
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts}
        />
      </section>
    </div>
  );
};
