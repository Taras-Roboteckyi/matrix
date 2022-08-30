export const getDataForm = state => state.items.data;
export const getDataMatrix = state => state.items.line;

/* export const getVisibleItems = state => {
  const items = getItems(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
}; */
