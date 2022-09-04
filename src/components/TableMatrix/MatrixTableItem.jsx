import PropTypes from 'prop-types';
import { useState } from 'react';

import { useDispatch /* , useSelector  */ } from 'react-redux';
import { AmountItem, SumItem } from './MartixTable.styled';
import { ItemsSlice } from '../../redux/items';

export function TableItem(props) {
  const [isHoverTdTable, setIsHoverTdTable] = useState(null);
  const dispatch = useDispatch();
  const { rowItem, tableItemIndex, tableRowIndex } = props;
  const { amount, sum } = rowItem;

  /* console.log('props.tableItemIndex ', tableItemIndex);
  console.log('props.rowItem ', rowItem); */
  const dataTableItem = { ...rowItem, indexColumn: tableItemIndex, indexRow: tableRowIndex };

  return (
    <>
      {amount && (
        <AmountItem
          onClick={() => dispatch(ItemsSlice.increment(dataTableItem))}
          /* onMouseEnter={handleMouseEnter} */
          onMouseLeave={() => setIsHoverTdTable(null)}
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
