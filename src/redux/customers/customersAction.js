import { GET_CUSTOMERS_SUCCESS, GET_CUSTOMERS_FAILURE, GET_CUSTOMERS_BEGIN } from './customersTypes';
import axios from 'axios';

export const getCustomers = () => {
  return (dispatch) => {
    dispatch(getCustomersBegin());
    return axios
      .get('https://my-json-server.typicode.com/mahipatsingh1990/casa/customers')
      .then(response => {
        dispatch(getCustomersSuccess(response.data))
      })
      .catch(error => {
        dispatch(getCustomersFailure());
      })
  }
}

export const getCustomersBegin = () => {
  return {
    type: GET_CUSTOMERS_BEGIN
  }
}

export const getCustomersSuccess = (data) => {
  return {
    type: GET_CUSTOMERS_SUCCESS,
    data: data
  }
}

export const getCustomersFailure = () => {
  return {
    type: GET_CUSTOMERS_FAILURE
  }
}




