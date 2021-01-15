import * as actionTypes from '../constants/cartConstants'

const INITIAL_CART_ITEMS_STATE = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

export const cartReducer = (state = { cartItems: INITIAL_CART_ITEMS_STATE }, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const cartItem = action.payload;

            const existItem = state.cartItems.find(item => item.id === cartItem.id);

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => (
                        item.id === existItem.id ? cartItem : item
                    ))
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, cartItem],
                };
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
            };
        default:
            return state;
    }
};