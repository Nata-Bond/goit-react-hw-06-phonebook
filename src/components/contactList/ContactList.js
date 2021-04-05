import React from "react";
import ContactListItem from "./ContactListItem";
import s from "./contacts.module.css";
import { connect } from "react-redux";

const ContactList = ({ contacts, filter }) => {
  const getFilteredContacts = (filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  };
  const filteredContacts = filter && getFilteredContacts(filter);

  return (
    <ul className={s.list}>
      {filteredContacts &&
        filteredContacts.map((contact) => {
          console.log(contact);

          return <ContactListItem key={contact.id} {...contact} />;
        })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
  filter: state.filter,
});

export default connect(mapStateToProps, null)(ContactList);
