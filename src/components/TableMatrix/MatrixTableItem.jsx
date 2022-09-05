import PropTypes from 'prop-types';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ItemsSlice, ItemsSelectors } from '../../redux/items';

import { AmountItem, SumItem } from './MartixTable.styled';

export function TableItem(props) {
  const [isHoverAmount, setIsHoverAmount] = useState(null);

  const dataMatrix = useSelector(ItemsSelectors.getDataMatrixLine);

  const dispatch = useDispatch();

  const { rowItem, tableItemIndex, tableRowIndex } = props;
  const { amount, sum, id } = rowItem;
  const dataTableItem = { ...rowItem, indexColumn: tableItemIndex, indexRow: tableRowIndex };

  const handleMouseEnterAmount = idAmount => {
    console.log(idAmount);
    console.log('dataMatrix', dataMatrix);
    const a = dataMatrix
      .reduce((allTags, item) => {
        allTags.push(...item);

        return allTags;
      }, [])
      .filter(({ amount }) => amount)
      .sort((firstAmount, secondStudent) => firstAmount.amount - secondStudent.amount);
    console.log(a);
    return a;
  };

  return (
    <>
      {amount && (
        <AmountItem
          onClick={() => dispatch(ItemsSlice.increment(dataTableItem))}
          onMouseEnter={() => handleMouseEnterAmount(id)}
          onMouseLeave={() => setIsHoverAmount(null)}
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
