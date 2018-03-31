import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVitalSign } from '../actions';
import { addRecord } from '../actions';
import Record from './record.js';

class VitalSignList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getVitalSign();
  }

  render() {
    console.log(this.props.vitalSign);
    return(
      <div>
        {/* <div>
          Patient ID:
          <input type="text" value={this.state.pt_id} onChange={this.handlePtIDChange} />
        </div> */}
        
        {this.props.vitalSign.fields.map(field => {

          return (
            <div><Record key={field.field_id}  field={field}/></div>
          );
        })}
        
        
      </div> 
    );
    }
}

const mapStateToProps = (state) => {
  return {
    vitalSign: state.vitalSign
  };
};

export default connect(mapStateToProps, { getVitalSign })(VitalSignList);
