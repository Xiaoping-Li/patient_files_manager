import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFormDetails } from '../actions';
// import '../styles/formStyle.css';
// import '../styles/listStyle.css';



class FormDetails extends Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    const id = this.props.id;
    this.props.getFormDetails(id);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.id !== nextProps.id) {
      this.props.formDetails = {};
    }
  }
  
  render() {
    //const ids = Array.from({length: 3}, (v, i) => i + 1);
    console.log(this.props.formDetails);
    if (this.props.formDetails === null) {
      return null;
    } 

    return(
      <li>{this.props.id} {this.props.formDetails.id}</li>
    );
  }   
};

const mapStateToProps = (state) => {
  return {
    formDetails: state.formDetails,
  }
};

export default connect(mapStateToProps, { getFormDetails })(FormDetails);