import { ACTIONTYPES } from '../action-contants/action-type';

export const setProducts = (products) => {
    return {
        type: ACTIONTYPES.SET_PRODUCTS,
        payload: products,
    };
};

export const getProducts = (product) => {
    return {
        type: ACTIONTYPES.GET_PRODUCTS,
        payload: product,
    };
};
