import { createSlice, combineReducers } from '@reduxjs/toolkit';

const initialState = {
  data: { row: null, column: null, range: null },
  line: [],
  average: '',
  isReducerSpinner: false,
  /* totalSum: false, */
  /*  hover: null, */
};

const itemsReducer = createSlice({
  name: 'matrix',
  initialState,
  reducers: {
    dataForm: (state, action) => {
      state.data = action.payload;
    },

    dataMatrix: (state, action) => {
      state.isReducerSpinner = true;
      state.line = action.payload.slice(0, action.payload.length - 1);
      state.average = action.payload[action.payload.length - 1];
      state.isReducerSpinner = false;
    },

    increment: (state, action) => {
      state.isReducerSpinner = true;

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
      state.average.averageValues[state.average.averageValues.length - 1] = {
        totalSum: state.average.averageValues[state.average.averageValues.length - 1].totalSum + 1,
      };

      state.isReducerSpinner = false;
    },

    deleteRow: (state, { payload }) => {
      state.isReducerSpinner = true;

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

      state.average.averageValues = [
        ...tempArray,

        (state.average.averageValues[state.average.averageValues.length - 1] = {
          totalSum: state.line
            .map(line =>
              line.reduce((sum, element) => {
                if (element.sum) {
                  return sum + element.sum;
                }
                return sum;
              }, 0),
            )
            .reduce((total, element) => {
              return total + element;
            }, 0),
        }),
      ];

      state.isReducerSpinner = false;
    },

    /*  addTotalSum: (state, { payload }) => {
      console.log(payload.totalSum + 1);
      state.totalSum = payload.totalSum + 1;
    }, */
    /* hoverAmount: (state, { payload }) => {
      state.hover = payload;
    }, */
    addRow: (state, { payload }) => {
      state.isReducerSpinner = true;
      state.line.push(payload);

      /* state.matrix = payload.map(item => item.amount).slice(0, payload.length - 1); */

      let array = [];
      const line = state.line.map(element => {
        return element.map(el => el.amount).slice(0, element.length - 1);
      });
      for (let column = 0; column < line[0]?.length; column += 1) {
        let sum = 0;
        for (let row = 0; row < line.length; row += 1) {
          sum += line[row][column];
        }

        array[column] = Number((sum / line.length).toFixed(2));
      }

      state.average.averageValues = [
        ...array,
        (state.average.averageValues[state.average.averageValues.length - 1] = {
          totalSum:
            state.average.averageValues[state.average.averageValues.length - 1].totalSum +
            payload[payload.length - 1].sum,
        }),
      ];

      state.isReducerSpinner = false;
    },
  },
});

export const { dataForm, dataMatrix, increment, deleteRow, addTotalSum, hoverAmount, addRow } =
  itemsReducer.actions;

export const reducer = combineReducers({
  items: itemsReducer.reducer,
});
