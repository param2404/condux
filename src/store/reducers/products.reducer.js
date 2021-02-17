import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from './../constants';

const initialState = {
  loading: false,
  products: [],
  error: null,
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
          return {
        ...state,
        loading: true,
        products: [],
        error: null,
      };
    case GET_PRODUCTS_SUCCESS:
          return {
            ...state,
            loading: false,
            products: action.payload,
            error: null,
          };
    case GET_PRODUCTS_ERROR:
          return {
            ...state,
            loading: false,
            products: [],
            error: action.error,
          };

    default:
      return state;
  }
};

export default ProductsReducer;
