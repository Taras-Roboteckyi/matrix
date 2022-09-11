import PropTypes from 'prop-types';
/* import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'; */

/* import { totalMatrix } from '../../utils/matrix'; */
/* import { ItemsSlice, ItemsSelectors } from '../../redux/items'; */

import { TransactionRow, TransactionItem, AverageItem, Total } from './MartixTable.styled';

export function TableFoot(props) {
  /* const totalSum = useSelector(ItemsSelectors.getTotalSum); */
  /* const dispatch = useDispatch(); */
  const averageValues = props.footer;
  const totalSum = props.totalSum;
  /* const dataMatrixTable = props.dataMatrix; */

  /* const total = totalMatrix(dataMatrixTable); */

  /* useEffect(() => {
    dispatch(ItemsSlice.addTotalSum(total));
  }, [dispatch, total]); */

  console.log('averageValues', averageValues);
  const textAverage = 'Середнє значення по стовчиках';

  /*  console.log('total', total); */

  return (
    <TransactionRow>
      {averageValues.length > 1 && <AverageItem>{textAverage}</AverageItem>}
      {averageValues.slice(0, averageValues.length - 1).map((row, index) => (
        <TableFootItem key={index} footItem={row} />
      ))}
      {averageValues.length > 1 && <Total>Загальна сума: {totalSum.totalSum}</Total>}
    </TransactionRow>
  );
}

function TableFootItem(props) {
  const { footItem } = props;

  return <>{footItem && <TransactionItem>{footItem}</TransactionItem>}</>;
}

TableFoot.propTypes = {
  averageValues: PropTypes.arrayOf(PropTypes.number),
};
