import { GET_CUSTOMER_DETAILS_BEGIN, GET_CUSTOMER_DETAILS_SUCCESS, GET_CUSTOMER_DETAILS_FAILURE } from './customerDetailsTypes';
import axios from 'axios';

/*export const getCustomerDetails = (id) => {
  return {
    type: GET_CUSTOMER_DETAILS_BEGIN,
    id: id
  }
}*/

export const getCustomerDetails = (id) => {
  return (dispatch) => {
    dispatch(getCustomerDetailsBegin());
    return axios
      .get(`https://my-json-server.typicode.com/mahipatsingh1990/casa/customer/${id}`)
      .then(response => {
        debugger;
        dispatch(getCustomerDetailsSuccess(response.data))
      })
      .catch(error => {
        dispatch(getCustomerDetailsFailure());
      })
  }
}

export const getCustomerDetailsBegin = (id) => {
  return {
    type: GET_CUSTOMER_DETAILS_BEGIN,
    id: id
  }
}

export const getCustomerDetailsSuccess = (data) => {
  return {
    type: GET_CUSTOMER_DETAILS_SUCCESS,
    data: data
  }
}

export const getCustomerDetailsFailure = () => {
  return {
    type: GET_CUSTOMER_DETAILS_FAILURE
  }
}




