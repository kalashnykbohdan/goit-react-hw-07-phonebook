import contactAction from './contactAction';
import axios from 'axios';

const addContact = ({name, number}) => dispatch =>{ dispatch(contactAction.addContactRequest());
    console.log(name, number);

    axios
    .post('http://localhost:2000/contacts', {name, number})
    .then(response => {dispatch(contactAction.addContactSuccess(response.data));})
    .catch(error => dispatch(contactAction.addContactError(error)));
};

const axiosContacts = () => dispatch => {
    dispatch(contactAction.axiosContactsRequest());

    axios
    .get('http://localhost:2000/contacts')
    .then(({data}) => dispatch(contactAction.axiosContactsSuccess(data)))
    .catch(error => dispatch(contactAction.axiosContactsError(error)));
};

const removeContact = id => dispatch => {
    dispatch(contactAction.removeContactRequest());
    
    axios.delete(`http://localhost:2000/contacts/${id}`)
    .then(() => dispatch(contactAction.removeContactSuccess(id)))
    .catch(error => dispatch(contactAction.removeContactError(error)));
}

export default {
    addContact,
    axiosContacts,
    removeContact,
}