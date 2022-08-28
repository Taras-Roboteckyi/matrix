import { createSlice, combineReducers } from '@reduxjs/toolkit';

const initialState = {
  data: { row: null, column: null, range: null },
  line: [],
  average: [],
};

const itemsReducer = createSlice({
  name: 'matrix',
  initialState,
  reducers: {
    dataForm: (state, action) => {
      state.data = action.payload;
    },
    creation: (state, action) => {
      state.line = [...action.payload];
    },
  },
});

export const { dataForm, creation } = itemsReducer.actions;

export const reducer = combineReducers({
  items: itemsReducer.reducer,
});
