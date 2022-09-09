import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import { ItemsSlice, ItemsSelectors } from '../../redux/items';

import { AmountItem, SumItem } from './MartixTable.styled';

export function TableItem(props) {
  /* const totalSum = useSelector(ItemsSelectors.getTotalSum); */
  const dispatch = useDispatch();

  const { rowItem, tableItemIndex, tableRowIndex, mouseEnter, mouseLeave, hover } = props;
  const { amount, sum, id } = rowItem;
  const dataTableItem = { ...rowItem, indexColumn: tableItemIndex, indexRow: tableRowIndex };
  /* console.log('rowItem', rowItem); */
  /* console.log('totalSum', totalSum); */
  /* console.log('hover', hover);
  const a = hover.find(item => item.isHovered === true);
  console.log('a', a); */
  return (
    <>
      {amount && (
        <AmountItem
          onClick={() => dispatch(ItemsSlice.increment(dataTableItem))}
          /* onMouseEnter={() => mouseEnter(id)} */
          /*  onMouseLeave={mouseLeave(null)} */
          /*  activeClassName={a?.isHovered} */
        >
          {amount}
        </AmountItem>
      )}
      {sum && <SumItem>{sum}</SumItem>}
    </>
  );
}

TableItem.propTypes = {
  rowItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    amount: PropTypes.number,
    sum: PropTypes.number,
  }),

  tableItemIndex: PropTypes.number.isRequired,
  tableRowIndex: PropTypes.number.isRequired,
};
