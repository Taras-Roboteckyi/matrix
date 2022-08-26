import { createSlice, combineReducers } from '@reduxjs/toolkit';

const itemsReducer = createSlice({
  name: 'items',
  initialState: 20,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload); //Немутуєм стейт через filter, тому return треба
    },
  },
});

export const reducer = combineReducers({
  items: itemsReducer.reducer,
});
