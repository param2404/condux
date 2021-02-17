import {
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESS,
    HANDLE_PRODUCT,
    RESET_PRODUCT
} from "./../constants";

const initialState = {
  loading: false,
  product: {},
  error: null,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
          return {
              ...state,
        loading: true,
        error: null,
      };
    case ADD_PRODUCT_SUCCESS:
          return {
            ...state,
            loading: false,
            error: null,
          };
    case ADD_PRODUCT_ERROR:
          return {
            ...state,
            loading: false,
            error: action.error,
          };
      case HANDLE_PRODUCT:
          return {
              ...state,
              product:{...state.product , ...action.payload}
          }
      case RESET_PRODUCT:
          return {
              ...state,
              product:{}
          }
    default:
      return state;
  }
};

export default ProductReducer;
