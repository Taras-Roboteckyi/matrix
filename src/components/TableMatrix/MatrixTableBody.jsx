import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { ItemsSelectors } from '../../redux/items';

import { TableItem } from './MatrixTableItem';
import { TransactionRow, TransactionItem, AvarageItem } from './MartixTable.styled';

export function TableBody() {
  const dataMatrixLine = useSelector(ItemsSelectors.getDataMatrixLine);
  const { averageValues } = useSelector(ItemsSelectors.getDataMatrixAverage);
  /* console.log('dataMatrixLine ', dataMatrixLine); */

  return (
    <tbody>
      {dataMatrixLine.map((line, index) => (
        <TableRow key={index} row={line} index={index} />
      ))}
      <TableFoot footer={averageValues} />
    </tbody>
  );
}

function TableRow(props) {
  const { row, index } = props;

  const increment = indexNumber => indexNumber + 1;

  return (
    <TransactionRow>
      {<AvarageItem>{increment(index)}</AvarageItem>}

      {row.map((row, indexItem) => (
        <TableItem key={row.id} rowItem={row} tableItemIndex={indexItem} tableRowIndex={index} />
      ))}
    </TransactionRow>
  );
}

function TableFoot(props) {
  const averageValues = props.footer;
  const textAverage = 'Середнє значення по стовчиках';

  return (
    <TransactionRow>
      {averageValues ? <AvarageItem>{textAverage}</AvarageItem> : null}
      {averageValues.map((row, index) => (
        <TableFootItem key={index} footItem={row} />
      ))}
    </TransactionRow>
  );
}

function TableFootItem(props) {
  const { footItem } = props;

  return <>{footItem && <TransactionItem>{footItem}</TransactionItem>}</>;
}

TableBody.propTypes = {
  dataMatrixLine: PropTypes.arrayOf(
    PropTypes.arrayOf({
      id: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      sum: PropTypes.number.isRequired,
    }),
  ),
  averageValues: PropTypes.arrayOf(PropTypes.number),
};
