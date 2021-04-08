import React from "react";
import ContactListItem from "./ContactListItem";
import s from "./contacts.module.css";
import { connect } from "react-redux";

const ContactList = ({ contacts, filter }) => {
  //this is it//

  const getFilteredContacts = () => {
    console.log(contacts, filter);
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  // return "muha";
  return (
    <ul className={s.list}>
      {filteredContacts &&
        filteredContacts.map((contact) => (
          <ContactListItem key={contact.id} {...contact} />
        ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

export default connect(mapStateToProps, null)(ContactList);
