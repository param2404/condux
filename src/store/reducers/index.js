import { combineReducers } from "redux";
import ProductsReducer from './products.reducer';
import ProductReducer from './product.reducer';


const rootReducer = combineReducers({
    products: ProductsReducer,
    product:ProductReducer
});

export default rootReducer;
