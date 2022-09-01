import { createSlice, combineReducers } from '@reduxjs/toolkit';

const initialState = {
  data: { row: null, column: null, range: null },
  line: [],
  average: '',
  isVisible: false,
};

const itemsReducer = createSlice({
  name: 'matrix',
  initialState,
  reducers: {
    dataForm: (state, action) => {
      state.data = action.payload;
    },
    dataMatrix: (state, action) => {
      /* console.log(action); */
      state.line = action.payload.slice(0, action.payload.length - 1);
      state.average = action.payload[action.payload.length - 1];
      state.isVisible = true;
    },
  },
});

export const { dataForm, dataMatrix } = itemsReducer.actions;

export const reducer = combineReducers({
  items: itemsReducer.reducer,
});
