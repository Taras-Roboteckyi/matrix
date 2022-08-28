import { createSlice, combineReducers } from '@reduxjs/toolkit';

const initialState = {
  line: [],
  average: [],
};

const itemsReducer = createSlice({
  name: 'matrix',
  initialState,
  reducers: {
    creation: (state, action) => {
      state.line = [...action.payload];
    },
  },
});

export const reducer = combineReducers({
  items: itemsReducer.reducer,
});
