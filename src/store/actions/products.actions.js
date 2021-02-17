import {
    GET_PRODUCTS,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_SUCCESS
} from '../constants';
import axios from 'axios';

import { baseUrl } from './../../api';

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS });
  await axios.get(`${baseUrl}/products`)
    .then((response) => {
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: GET_PRODUCTS_ERROR , error:error.response});
    })
    .catch(() => {
      dispatch({ type: GET_PRODUCTS_ERROR , error:'Something bad happened' });
    });
};