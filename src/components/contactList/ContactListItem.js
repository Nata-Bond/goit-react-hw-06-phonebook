import React from "react";
import s from "./contacts.module.css";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsActions";

const ContactListItem = ({ name, number, id, deleteContact }) => {
  return (
    <li className={s.listItem}>
      <span>
        {name} : {number}
      </span>
      <button
        className={s.button}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

const mapDispatchToProps = { deleteContact };

export default connect(null, mapDispatchToProps)(ContactListItem);
