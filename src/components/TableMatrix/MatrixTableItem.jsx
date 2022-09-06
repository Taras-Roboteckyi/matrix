import PropTypes from 'prop-types';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ItemsSlice, ItemsSelectors } from '../../redux/items';

import { AmountItem, SumItem } from './MartixTable.styled';

export function TableItem(props) {
  const [isHoverAmount, setIsHoverAmount] = useState(null);

  const dataMatrix = useSelector(ItemsSelectors.getDataMatrixLine);
  const diapasonX = useSelector(ItemsSelectors.getDataForm);
  const dispatch = useDispatch();

  const { rowItem, tableItemIndex, tableRowIndex } = props;
  const { amount, sum, id } = rowItem;
  const dataTableItem = { ...rowItem, indexColumn: tableItemIndex, indexRow: tableRowIndex };
  /* console.log('rowItem', rowItem); */

  const arrayMatrix = dataMatrix
    .reduce((allTags, item) => {
      allTags.push(...item);

      return allTags;
    }, [])
    .filter(({ amount }) => amount);

  const handleMouseEnterAmount = async idAmount => {
    /* console.log(idAmount);
    console.log('dataMatrix', dataMatrix); */

    const electIdAmount = arrayMatrix.find(el => el.id === idAmount);

    const arrayOfTemporaryAmount = arrayMatrix.reduce((arr, item) => {
      if (item.id === idAmount) {
        return arr;
      } else {
        const differenceAmounts = Math.abs(item.amount - electIdAmount.amount);
        const newAmount = { ...item, different: differenceAmounts };
        /* delete newAmount.amount; */
        /*  console.log('arr', arr); */
        return [...arr, newAmount];
      }
    }, []);

    const newArrayOnMouseEnter = [...arrayOfTemporaryAmount]
      .sort((a, b) => {
        return a.different - b.different;
      })
      .slice(0, diapasonX.range);

    await setIsHoverAmount(newArrayOnMouseEnter);

    /* return newArrayOnMouseEnter; */
  };
  function findNewArray() {
    return arrayMatrix.map(el => {
      const hoveredObject = isHoverAmount?.find(({ id }) => id === el.id); // return object or undefined

      if (!hoveredObject) {
        return { ...el, isHovered: false };
      }

      return { ...hoveredObject, isHovered: true };
    });
  }
  const b = findNewArray();

  console.log('a()', b);

  return (
    <>
      {amount && (
        <AmountItem
          onClick={() => dispatch(ItemsSlice.increment(dataTableItem))}
          onMouseEnter={() => handleMouseEnterAmount(id)}
          onMouseLeave={() => setIsHoverAmount(null)}
          activeClassName={b}
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
