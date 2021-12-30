//File is a central point to contains all reducers

//this method combines the reducers
import { combineReducers } from 'redux';
import { productReducers } from './productReducer';

const reducers = combineReducers({
    allProducts: productReducers,
});

export default reducers;
