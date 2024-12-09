import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "@/config/storage";

const initialState = loadState('products') || {
    productList: [],
    totalPrice: 0,
};

const productReducer = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const item = state.productList.find((product) => product.id == action.payload.id)
            if(!item){

                return {
                    ...state,
                    productList: [...state.productList, action.payload, ], 
                    totalPrice: state.totalPrice + action.payload.price, 
                };
            }
            return state
        },
    },
});

export default productReducer.reducer;

export const { addProduct } = productReducer.actions;
