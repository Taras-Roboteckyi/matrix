import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  data: { row: null, column: null, range: null },
  line: [],
  average: '',
  matrix: null,
};

const itemsReducer = createSlice({
  name: 'matrix',
  initialState,
  reducers: {
    dataForm: (state, action) => {
      state.data = action.payload;
    },
    dataMatrix: (state, action) => {
      state.matrix = action.payload;
      console.log('dataMatrix', action.payload);
      state.line = action.payload.slice(0, action.payload.length - 1);
      state.average = action.payload[action.payload.length - 1];
      /*  state.amountNumber = {
        ...action.payload.slice(0, action.payload.length - 1).map(item => {
          return item.map(({ amount }) => amount + 1);
        }),
      };
      console.log(state.amountNumber); */
    },
    increment: (state, action) => {
      console.log(action.payload);
      const newRow = state.line.find((_, index) => index === action.payload.indexRow);

      const newItemRow = newRow.map(element => {
        const newAmount = element.id === action.payload.id ? element.amount + 1 : element.amount;

        if (element.sum) {
          element.sum += 1;
        }
        return { ...element, amount: newAmount };
      });
      state.line[action.payload.indexRow] = newItemRow;

      /* state.average = [...state.average] */
    },
  },
});

export const { dataForm, dataMatrix, increment } = itemsReducer.actions;

export const reducer = combineReducers({
  items: itemsReducer.reducer,
});
