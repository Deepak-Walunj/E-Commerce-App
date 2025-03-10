import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Comonents/CartSlice'

const store = configureStore({
    reducer : {
        cart : cartReducer
    }
})

export default store