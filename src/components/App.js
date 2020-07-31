import React, {Component} from 'react';
import {connect} from 'react-redux';
import Section from './Sections';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter'

import { Toast } from "toaster-js"
import "toaster-js/default.css";
import contactOperations from '../redux/contactOperations';
import contactsSelector from '../redux/cnotactsSelectors';

class App extends Component {
  // {isLoadingTasks}
  componentDidMount(){
    this.props.onAxiosContacts();
  }
  render(){
    return (

      <Section title="Phonebook">
        <ContactForm/>
        {this.props.isLoadingTasks && <h1>LOADING STUFF...</h1>}
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
      </Section>

    )
  }

}

const mapStateToProps = state => ({
  isLoadingTasks: contactsSelector.getLoading(state),
})

const mapDispatchToProps = {
  onAxiosContacts: contactOperations.axiosContacts,
}


export default  connect(mapStateToProps, mapDispatchToProps)(App);


