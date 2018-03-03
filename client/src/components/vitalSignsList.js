import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVitalSigns, deleteVitalSign } from '../actions';
import VitalSign from './vitalSign.js';

class VitalSignsList extends Component {
  componentDidMount() {
    this.props.getVitalSigns();
  }

  render() {
    return(
      <ul>
        {this.props.vitalSigns.map(vitalSign => {
          return (
            <VitalSign key={vitalSign.id} vitalSign={vitalSign} onDelete={this.props.deleteVitalSign}/>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vitalSigns: state.vitalSigns
  };
};

export default connect(mapStateToProps, { getVitalSigns, deleteVitalSign })(VitalSignsList);
