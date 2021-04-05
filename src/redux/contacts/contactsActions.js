import types from "./contactsTypes";
import shortid from "shortid";

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const deleteContact = (id) => ({
  type: types.DELETE,
  payload: id,
});

const changeFilter = (filterValue) => ({
  type: types.CHANGE_FILTER,
  payload: filterValue,
});

export { addContact, deleteContact, changeFilter };
