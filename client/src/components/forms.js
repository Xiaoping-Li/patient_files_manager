import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getForms } from '../actions';

import '../styles/listStyle.css';

class Forms extends Component {
  componentDidMount() {
    this.props.getForms();
  }

  render() {
    return(
      <ul>
        {this.props.forms.map(form => {
          return (
            <li key={form.id}>{form.name} <button>add form</button></li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    forms: state.forms
  };
};

export default connect(mapStateToProps, { getForms })(Forms);