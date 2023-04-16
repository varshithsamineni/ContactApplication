import ContactCard from "./ContactCard"

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.removeContactHandler(id);
  };

  const renderContactList = props.contact.map((contact) => {
    return <ContactCard contact={contact} clickHandler={deleteContactHandler} />;
  });

  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
