import { GET_CUSTOMER_DETAILS_BEGIN, GET_CUSTOMER_DETAILS_SUCCESS, GET_CUSTOMER_DETAILS_FAILURE } from './customerDetailsTypes';
import { ProfileDataSuccess, ProfileDataFailure, getProfileDataTemp, getCustomerDetails } from './customerDetailsAction';
import axios from 'axios';
import store from '../../redux/store';


const initialState = {
  customerDetails: {},
  loading: true,
  error: null,
}

const customerReducer = (state = initialState, action) => {
  //action.data = {address: 'Bangalore'}
  switch (action.type) {

    case GET_CUSTOMER_DETAILS_BEGIN: {
      return { 
        ...state, 
        loading: true 
      };
    }

    case GET_CUSTOMER_DETAILS_SUCCESS: {
      return { 
        ...state, 
        loading: false, 
        customerDetails: action.data 
      };
    }

    case GET_CUSTOMER_DETAILS_FAILURE: {
      return { 
        ...state, 
        loading: false, 
        error: 'ERROR' 
      };
    }

    default: return state
  }
}

export default customerReducer