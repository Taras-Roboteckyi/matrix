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
      /* state.matrix = action.payload; */
      /* console.log('dataMatrix', action.payload); */
      state.line = action.payload.slice(0, action.payload.length - 1);
      state.average = action.payload[action.payload.length - 1];
    },

    increment: (state, action) => {
      /* console.log(action.payload); */
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

    deleteRow: (state, { payload }) => {
      /* console.log(payload); */

      state.line = state.line.filter((_, index) => index !== payload);

      const filter = state.line
        .filter((_, index) => index !== payload)

        .map(element => {
          return element.map(el => el.amount).slice(0, element.length - 1);
        });
      let tempArray = [];

      for (let column = 0; column < filter[0]?.length; column += 1) {
        let sum = 0;
        for (let row = 0; row < filter.length; row += 1) {
          sum += filter[row][column];
        }

        tempArray[column] = Number((sum / filter.length).toFixed(2));
      }

      state.average.averageValues = [...tempArray];
    },
  },
});

export const { dataForm, dataMatrix, increment, deleteRow } = itemsReducer.actions;

export const reducer = combineReducers({
  items: itemsReducer.reducer,
});
