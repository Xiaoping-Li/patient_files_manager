import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecord, updateRecord } from '../actions';
import '../styles/formStyle.css';


class Record extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.record.fieldName}:
        <input
          value={this.props.record.record_value}
          type="text"
          
        />  
      </div>
    )
  }
}

export default Record;