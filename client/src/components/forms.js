import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getForms } from '../actions';
import RecordForm from './recordForm';

import '../styles/listStyle.css';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  }

  componentDidMount() {
    this.props.getForms();
  }

  render() {
    return(
      <form>
        <select value={this.state.value} onChange={this.handleChange}>
          {this.props.forms.map((form, index) => {
            return(
              <option key={form.id} value={index}>{form.name}</option>
            );
          })} 
        </select>
        <button>Add Form</button>
        <RecordForm patientID={this.props.patientID} form={this.props.forms[this.state.value]} />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    forms: state.forms
  };
};

export default connect(mapStateToProps, { getForms })(Forms);