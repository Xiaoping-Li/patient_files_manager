import React, { Component } from 'react';

class DropDownSelect extends Component {

  selectOptions = (form) => (
    <option key={form.id} value={form.id}>{form.name}</option>
  )

  render() {
    const { input } = this.props;
    return (
      <div>
        <select {...input}>
          <option value="">Select</option>
          {this.props.forms.map(this.selectOptions)}
        </select>
      </div>
    );
  }
}

export default DropDownSelect;