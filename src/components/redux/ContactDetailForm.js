import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types';

export const fields = ['name', 'address'];

class ContactDetailForm extends Component {
  render() {
    const { handleSubmit, contactDetail, fields: { name } } = this.props;
    console.log(`render: ${name} - ${contactDetail}`);
    return (
        <form onSubmit={handleSubmit}>
          <h2>redux-form test</h2>
          <input type="input" {...name} />
          <Field name="firstName" component="input" type="text" />
          <button type="submit">Submit</button>
        </form>
     );
  }
}


ContactDetailForm.propTypes = {
    handleSubmit: PropTypes.func
}

export default reduxForm({
  form: 'contactDetail',
  fields
},
(state) => {
   console.log(`mapToProps ${state}`);
   const { contactDetail } = state;

   return { contactDetail };
},
(dispatch) => {
    return {}
})(ContactDetailForm);

