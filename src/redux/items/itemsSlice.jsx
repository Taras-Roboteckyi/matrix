import { createSlice, combineReducers } from '@reduxjs/toolkit';

const initialState = {
  data: { row: null, column: null, range: null },
  line: [],
  average: '',
  amountNumber: null,
};

const itemsReducer = createSlice({
  name: 'matrix',
  initialState,
  reducers: {
    dataForm: (state, action) => {
      state.data = action.payload;
    },
    dataMatrix: (state, action) => {
      /* console.log(action.payload); */
      state.line = action.payload.slice(0, action.payload.length - 1);
      state.average = action.payload[action.payload.length - 1];
     /*  state.amountNumber = {
        ...action.payload.slice(0, action.payload.length - 1).map(item => {
          return item.map(({ amount }) => amount + 1);
        }),
      };
      console.log(state.amountNumber); */
    },
    /* increment: (state, action) => {
      console.log(action.payload.amount);

      state.amountNumber = action.payload.amount + 1;
    }, */
  },
});

export const { dataForm, dataMatrix /* , increment */ } = itemsReducer.actions;

export const reducer = combineReducers({
  items: itemsReducer.reducer,
});
