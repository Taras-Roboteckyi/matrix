export const getDataForm = state => state.items.data;
export const getDataMatrixLine = state => state.items.line;
export const getDataMatrixAverage = state => state.items.average;
export const getVisibleTable = state => state.items.isVisible;

/* export const getVisibleItems = state => {
  const items = getItems(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
}; */
