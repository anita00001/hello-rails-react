import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'api/v1/greetings';

const initialState = [];

export const getGreeting = createAsyncThunk('greetings/getGreeting', async () => {
  const response = await axios.get(baseURL);
  return response.data;
});

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGreeting.fulfilled, (state, action) => action.payload);
  },
});

export default greetingsSlice.reducer;