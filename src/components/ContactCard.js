const ContactCard = ({contact,clickHandler}) => {
   
    return (
        <div className="item">
           
            <div className="content">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNJWuFFn6JGSOHB39gNh6X_VLXmAL-9nkPKBb6u0j&s" alt="really scary image"></img>
                <div className="header">{contact.name}</div>
                <div>{contact.email}</div>
            </div>
            <i className="trash alternate outline icon" onClick={()=> clickHandler(contact.id)} style={{ color:"red", marginTop:"7px"}}></i>
        </div>
     );
}

export default ContactCard;
