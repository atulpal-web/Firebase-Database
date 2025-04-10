import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { onValue, push, ref, set, update, remove } from "firebase/database";
import db from "../../firebase";


var URL = " http://localhost:5173/recipe"
export const createRecipe = createAsyncThunk('add/recipe', async(data) => {
    try {
        const res = await set(push(ref(db,'task'), data))
        console.log(res)
        // set(dbconfig, data)
        return res.data
    } catch (error) {
        console.log('error', error);
    }
})
export const viewRecipe = createAsyncThunk('view/recipe', async () => {
    return new Promise((resolve, reject) => {
        const array1 = [];
        onValue(ref(db, 'task'), (arr) => {
            if (arr.exists()) {
                arr.forEach((ele) => {
                    array1.push({
                        id: ele.key,
                        ...ele.val()
                    });
                });
            }
            resolve(array1);
        }, {
            onlyOnce: true
        }, (error) => {
            reject(error);
        });
    });
});

export const deleteRecipe = createAsyncThunk('delete/recipe', async (id) => {
    try {
        await remove(ref(db, `task/${id}`))
        return id
    } catch (error) {
        console.log('errror', error);
    }
})
export const updateRecipe = createAsyncThunk('update/recipe', async (data) => {
    // console.log(data)
    const { id } = data;
    await update(ref(db, `task/${id}`), data)
    return res.data
})
const initialState = {
    RecipeList: []
}

const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    extraReducers: (res) => {
        res.addCase(createRecipe.fulfilled, (state, action) => {
            state.RecipeList.push(action.payload)
        })
            .addCase(viewRecipe.fulfilled, (state, action) => {
                state.RecipeList = action.payload
            })
            .addCase(deleteRecipe.fulfilled, (state, action) => {
                const id = action.payload;
                const filterData = state.RecipeList.filter((recipe) => {
                    return recipe.id !== id
                })
                state.RecipeList = filterData
            })
            .addCase(updateRecipe.fulfilled, (state, action) => {
                const { id } = action.payload

                const index = state.RecipeList.findIndex((recipe) => {
                    return recipe.id === id
                })
                if (index != -1) {
                    state.RecipeList[index] = action.payload
                }
            })


    }
})
export default recipeSlice.reducer