import {createSlice} from '@reduxjs/toolkit'
const cartSlice = createSlice({
    name:"cart",
    initialState : {
        product:[],
        quentity:0,
        total:0,
        totalItemQuentity:0,
    },
    reducers: {
        addProduct : (state, action) => {
            const existingProduct = state.product.find(item => item.id === action.payload.id);

            if (existingProduct) {
                // If the product already exists in the cart, update the quantity
                existingProduct.cartQuentity += action.payload.cartQuentity;

                // state.quentity += action.payload.cartQuentity;
                state.total += action.payload.price * action.payload.cartQuentity;
                // state.totalItemQuentity += action.payload.cartQuentity;
            } else {
                // If the product doesn't exist in the cart, add it as a new item
                state.quentity += 1;
                state.product.push(action.payload);
                state.total += action.payload.price * action.payload.cartQuentity;
                state.totalItemQuentity += action.payload.cartQuentity;
            }
        },
        removeProduct: (state,action) => {
            const removedItem = state.product.find((item) => item.id === action.payload.id);
            if (removedItem) {
                console.log("Removed Item:", removedItem.id);
                state.product = state.product.filter((item) => item.id !== action.payload.id);
                state.quentity -= 1
                state.total -= removedItem.price * removedItem.cartQuentity;
                state.totalItemQuentity -= removedItem.cartQuentity
            }
        },
        increment : (state,action) => {
            state.product = state.product.map((item) => {
                if(item.id === action.payload.id) {
                    return {...item, cartQuentity: item.cartQuentity + 1}
                }
                return item
            })
            state.total += action.payload.price
        },
        decrement : (state,action) => {
            state.product = state.product.map((item) => {
                if(item.id === action.payload.id) {
                    return {...item, cartQuentity: item.cartQuentity - 1}
                }
                return item
            })
            state.total -= action.payload.price 
        }
    }
})
export const {addProduct,removeProduct, increment, decrement} = cartSlice.actions
export default cartSlice.reducer