import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        // originalState = {items: [] }
        clearCart: (state) => {
            // console.log(state); //proxy object
            // console.log(current(state));
            // state = []; //this will not change the state
            // console.log(state);


            // vanila(old) redux
            // const newState = [...state];
            // return newState


            // new RTK
            state.items.length = 0;  // originalState = {items: [] }

            // return  {items: [] }; // this will replace the original state with  {items: [] }
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;  //cartReducer