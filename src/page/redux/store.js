import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/product-reducer";
import { saveState } from "@/config/storage";

export const store = configureStore({
    reducer:{
        product: productReducer,
    }
})

store.subscribe(() => {
    saveState("products", store.getState().product)
})