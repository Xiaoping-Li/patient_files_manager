import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getForms } from '../actions';

import '../styles/listStyle.css';

class Forms extends Component {
  componentDidMount() {
    this.props.getForms();
  }

  render() {
    const n = this.props.forms.length;
    const ids = Array.from({length: n}, (v, i) => i + 1);
    return(
      <ul>
        {ids.map(id => {
          return (
   
            <li></li>
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