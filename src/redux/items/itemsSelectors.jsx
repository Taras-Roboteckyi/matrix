export const getDataForm = state => state.items.data;
export const getDataMatrixLine = state => state.items.line;
export const getDataMatrixAverage = state => state.items.average;
export const getAmount = state => state.items.amountNumber;
export const getIsReducerSpinner = state => state.items.isReducerSpinner;
/* export const getHoverAmount = state => state.items.hover; */
/* export const getVisibleTable = state => state.items.isVisible; */

/* export const getVisibleItems = state => {
  const items = getItems(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
}; */
