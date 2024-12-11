import { createSlice } from '@reduxjs/toolkit';  // createSlice ni import qilamiz
import { loadState } from '@/config/storage';  // Agar storage ishlatayotgan bo'lsangiz, bu qator o'rinli

const initialState = loadState('products') || {
    productList: [],
    totalPrice: 0,
};

const productReducer = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const item = state.productList.find((product) => product.id == action.payload.id);
            if (!item) {
                return {
                    ...state,
                    productList: [...state.productList, action.payload],
                    totalPrice: state.totalPrice + action.payload.price,
                };
            }
            return state;
        },
        removeProduct: (state, action) => {
            return {
                ...state,
                productList: state.productList.filter((product) => product.id !== action.payload),
                totalPrice: state.totalPrice - action.payload.price,
            };
        }
    },
});

export const { addProduct, removeProduct } = productReducer.actions;
export default productReducer.reducer;
