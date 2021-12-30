//redux store
//import to create the redux store
import { createStore } from 'redux';
//Bring in all reducers
import reducers from './reducers/allReducers';

//createStore takes a couple of args
//The first is the reducers
//Second is state
//third is optional middleware/extensions
const store = createStore(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //<- This is to enable google redux extension tool
);

export default store;

//After u connect Provider object with store in index.js u can now import store anywhere inside ur application to read its state
//Ex import store from './redux/store'
//console.log(store.getStore().allProducts)
// will give u current state data for allProducts.
//The name allProducts is because that is what u decided to name ur productReducers in the allReducers.js file
//Look at app.js for the example commented out
