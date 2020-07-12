import { GET_CUSTOMERS_SUCCESS, GET_CUSTOMERS_FAILURE, GET_CUSTOMERS_BEGIN } from './customersTypes';
import { ProfileDataSuccess, ProfileDataFailure, getProfileDataTemp, getCustomerDetails } from './customersAction';
import axios from 'axios';
import store from '../../redux/store';


const initialState = {
  customers: [],
  loading: true,
  error: null,
}

const customerDetailsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case GET_CUSTOMERS_BEGIN: {      
      return { 
        ...state, 
        loading: true 
      };
    }
    case GET_CUSTOMERS_SUCCESS: {
      return {
        ...state,
        customers: action.data,
        loading: false,
      }

    }

     case GET_CUSTOMERS_FAILURE: {      
      return { 
        ...state, 
        loading: false,
        error: "ERROR" 
      };
    }

    default: return state
  }
}

export default customerDetailsReducer