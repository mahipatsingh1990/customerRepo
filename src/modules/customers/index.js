import React, { useState, useEffect } from "react";
import { getCustomers } from '../../redux/customers/customersAction';
import { getCustomerDetails } from '../../redux/customerDetails/customerDetailsAction';
import { compose } from 'redux';
import { connect } from 'react-redux';

const Customers = (props) => {

  useEffect(() => {
    props.getCustomers();
  }, []);

  function getCustomerDetailsObj(id) {
    props.getCustomerDetails(id);
  }
  
  return (
    !props.loading && (
      <section>
        <h2> Customer List </h2>
        <header>
          <div className="col">Name</div>
          <div className="col">Age</div>
        </header>
        {
          props.customers.map((data, id) => {
            return (
              <div key={id} className="row" onClick={() => getCustomerDetailsObj(data.id)}>
                <div className="col">{data.name}</div>
                <div className="col">{data.age}</div>
              </div>
            )
          })
        }
      </section>
    )
  )
}

const mapStateToProps = state => {
  return {
    customers: state.customers.customers,
    loading: state.customers.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCustomers: () => dispatch(getCustomers()),
    getCustomerDetails: (id) => dispatch(getCustomerDetails(id))
  }
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
)(Customers)