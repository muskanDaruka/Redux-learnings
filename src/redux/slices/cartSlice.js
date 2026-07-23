import { createSelector, createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        addItems: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const getItemsSelector = createSelector(
    (state) => state.cart,
    (state) => state
)
export const { addItems } = cartSlice.actions;
export default cartSlice.reducer;