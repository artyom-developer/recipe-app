import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RecipeState } from '../models/recipe'
import recipeService from '../services/recipe.service';
 
const initialState: RecipeState = {
  recipes: [],
  loading: false,
  error: ''
}

export const getRecipes = createAsyncThunk('recipe/fetchRecipes', async (query:string) => {
  try {
    return await recipeService.getRecipes(query);
  } catch (error) {
    console.log('Error: ', error);
    return [];
  }
})
  
const userSlice = createSlice({
  name: 'recipe', 
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getRecipes.pending, state => {
      state.loading = true
    })
    builder.addCase(
      getRecipes.fulfilled, (state, action: any) => {
        state.loading = false
        state.recipes = action.payload || [];
        state.error = ''
      }
    )
    builder.addCase(getRecipes.rejected, (state, action) => {
      state.loading = false
      state.recipes = []
      state.error = action.error.message || 'Error server ...'
    })
  }
})

export default userSlice.reducer
