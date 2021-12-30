import { ACTIONTYPES } from '../action-contants/action-type';
const initalState = {
    id: 1,
    name: 'product-1',
};

export const productReducers = (state = initalState, action) => {
    switch (action.type) {
        case ACTIONTYPES.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
};
