import { createSlice, configureStore } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './state';

const basketSlice = createSlice({
  name: 'basket',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state: any, action: any) => {
      const productIndex = action.payload.id;
      if (!state.cart[productIndex]) {
        const product = {
          name: action.payload.name,
          image: action.payload.images[0],
          price: 20,
          quantity: 1,
        }
        state.cart = Object.assign({}, state.cart, { [productIndex]: product });
        return state;
      }
      state.cart[productIndex].quantity+=1;
      return state;
    },
    updateProductQuantity: (state: any, action: any) => {
      state.cart[action.payload.productId].quantity+=action.payload.increment;
      if (state.cart[action.payload.productId].quantity <= 0){
        state.cart[action.payload.productId].quantity = 1; 
      }
      return state;
    },
    removeItemFromCart: (state: any, action: any) => {
      delete state.cart[action.payload.productId];
      return state;
    },
  }
})

const store = configureStore({ reducer: basketSlice.reducer });
export const { addToCart, updateProductQuantity, removeItemFromCart } = basketSlice.actions;
export { basketSlice, store };