import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
        );
    });

export default {
    getLoading,
    getFilter, 
    getVisibleContacts,
};