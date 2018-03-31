import React, { Component } from 'react';
import '../styles/formStyle.css';


class Record extends Component {
  constructor(props) {
    super(props);
  }

  handleValueChange = (e) => {
    this.setState({
      record_value: e.target.value
    });
  };

  render() {
    return (
      <div>
        {this.props.record.field_name}:
        
      </div>
    )
  }
}

export default Record;