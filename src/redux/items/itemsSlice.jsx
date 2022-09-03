import { createSlice, combineReducers } from '@reduxjs/toolkit';

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
      console.log('dataMatrix', action.payload);
      state.line = action.payload.slice(0, action.payload.length - 1);
      state.average = action.payload[action.payload.length - 1];
    },

    increment: (state, action) => {
      state.line[action.payload.indexRow] = state.line
        .find((_, index) => index === action.payload.indexRow)
        .map(element => {
          const newAmount = element.id === action.payload.id ? element.amount + 1 : element.amount;

          if (element.sum) {
            element.sum += 1;
          }
          return { ...element, amount: newAmount };
        });

      state.average.averageValues[action.payload.indexColumn] = Number(
        state.line
          .map(line => {
            return line.find((_, index) => index === action.payload.indexColumn);
          })
          .reduce((total, { amount }) => {
            return total + amount / state.line.length;
          }, 0)
          .toFixed(2),
      );
    },
  },
});

export const { dataForm, dataMatrix, increment } = itemsReducer.actions;

export const reducer = combineReducers({
  items: itemsReducer.reducer,
});
