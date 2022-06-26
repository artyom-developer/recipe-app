import axios from 'axios'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { UserState, User } from '../models/user'
import userService from '../services/user.service';
 
const initialState: UserState = {
  users: [],
  loading: false,
  error: ''
}

export const getUsers = createAsyncThunk('user/fetchUsers', async () => {
  try {
    return await userService.getUsers();
  } catch (error) {
    console.log('Error: ', error);
    return [];
  }
})
  
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(
      getUsers.fulfilled, (state, action: any) => {
        state.loading = false
        state.users = action.payload?.data || [];
        state.error = ''
      }
    )
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message || 'Something went wrong'
    })
  }
})

export default userSlice.reducer
