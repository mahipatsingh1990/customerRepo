import React, { useState, useEffect } from "react";
import { getCustomerDetails } from '../../redux/customerDetails/customerDetailsAction';
import { compose } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

const CustomerDetails = (props) => {
 
  return (
    !props.loading && (
      <div>
        <h3> Customer Details </h3>
        <h5> Address: </h5>
        <ul>
          {
            props.customerDetails.addresses.map((address, id) => {
              return <li key={id}> { address } </li>
            })
          }
        </ul>
      </div>
    )
  )
}

const mapStateToProps = state => {
  return {
    customerDetails: state.customerDetails.customerDetails,
    loading: state.customerDetails.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCustomerDetails: () => dispatch(getCustomerDetails())
  }
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
)(CustomerDetails)