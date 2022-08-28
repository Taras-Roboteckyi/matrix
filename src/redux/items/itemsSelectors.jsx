export const dataMatrix = state => state.line;
export const getFilter = state => state.contacts.filter;

/* export const getVisibleItems = state => {
  const items = getItems(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
}; */
