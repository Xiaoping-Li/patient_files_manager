import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getForms } from '../actions';
import DropDownSelect from './dropDownSelect';
import Record from './record';



import '../styles/listStyle.css';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        id: null,
        name: '',
        fields: []
      },

      records: []
    };
  }

  componentDidMount() {
    this.props.getForms();
    
  }

  handleFormChange = e => {
    const selectedID = parseInt(e.target.value);
    const emptyForm = {
      id: null,
      name: '',
      fields: []
    };
    const selectedForm = this.props.forms.find(form => form.id === selectedID) || emptyForm;

    const records = selectedForm.fields.map(field => {
      return {
        fieldName: field.field_name,
        fieldID: field.field_id,
        patientID: this.props.patientID,
        record_value: ''
      };
    });

    this.setState({
      form: selectedForm,
      records: records
    });
  }

  render() {
    return(
      <div>
        <label htmlFor="dropDownSelect">Select a Form</label>
        <Field
          name="dromDownSelect"
          label="dropDownSelect"
          component={DropDownSelect}
          forms={this.props.forms}
          onChange={this.handleFormChange.bind(this)}
        />
        
        <div className="form_style">
          {this.props.patientID}
          {this.state.form.name}
          <ul>
            {this.state.records.map(record => {
              return(
                <li key={record.fieldID}><Record  record={record} /></li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

Forms = reduxForm({
  form: 'dropDownSelect'
})(Forms);

const mapStateToProps = (state) => {
  return {
    forms: state.forms
  };
};

export default connect(mapStateToProps, { getForms })(Forms);