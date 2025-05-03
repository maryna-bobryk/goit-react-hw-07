import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});
export const selectNameFilter = state => state.filter.name;
export const filterReducer = slice.reducer;
export const { changeFilter } = slice.actions;
