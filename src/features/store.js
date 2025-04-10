import { configureStore, createSlice } from "@reduxjs/toolkit";
import recipeSlice from "./recipeSlice";
const store = configureStore({
    reducer: {
        recipe:recipeSlice
    }
})
export default store