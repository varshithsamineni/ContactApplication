import Header from './components/Header.js';
import {v4 as uuid} from "uuid";

import {useState,useEffect} from "react";
import ContactList from './components/ContactList.js';
import ContactCard from './components/ContactCard.js';
import AddContact from './components/AddContact.js';
function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts]=useState([]);
  const addContactHandler=(contact)=>{
    setContacts([...contacts,{id:uuid(),...contact}])
  };
  // now we are going to delete the item based this id.so lwt us write the delete function.
  const removeContactHandler=(id)=>{
    const newContactList=contacts.filter((contact)=>{
      return contact.id!==id;
    });
    setContacts(newContactList);
  }
  useEffect(()=>{
    const retrieveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts)
    setContacts(retrieveContacts);
    
  },[]);
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
    
  },[contacts]);
 return (
   <div className="ui container">
    <Header />
    <AddContact addContactHandler={addContactHandler} />
    <ContactList contact={contacts} removeContactHandler={removeContactHandler}/>
    

   </div>
  );
}

export default App;
