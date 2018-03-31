import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecords } from '../actions';

// import '../styles/listStyle.css';

class Records extends Component {
  componentDidMount() {
    this.props.getRecords();
  }

  render() {
    return(
      <ul>
        {this.props.records.map(record => {
          return (
            <li>{record.patientID} {record.field_name} {record.record_value}</li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    records: state.records
  };
};

export default connect(mapStateToProps, { getRecords })(Records);
