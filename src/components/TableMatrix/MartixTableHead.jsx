/* import PropTypes from 'prop-types'; */

import { useSelector } from 'react-redux';
import { ItemsSelectors } from '../../redux/items';

import {
  TransactionRow,
  TransactionItem,
  TransactionHeadItem,
  TableHeaderStyle,
} from './MartixTable.styled';

export function TableHeader() {
  return (
    <TableHeaderStyle>
      <TransactionRow>
        <TransactionHeadItem>Type</TransactionHeadItem>
        <TransactionHeadItem>Amount</TransactionHeadItem>
        <TransactionHeadItem>Currency</TransactionHeadItem>
      </TransactionRow>
    </TableHeaderStyle>
  );
}

export function TableBody() {
  const dataMatrixLine = useSelector(ItemsSelectors.getDataMatrixLine);
  console.log('dataMatrixLine ', dataMatrixLine);

  return (
    <tbody>
      {dataMatrixLine.map((line, index) => (
        <TableRow key={index} row={line} />
      ))}
    </tbody>
  );
}

function TableRow(props) {
  const { row } = props;

  return row.map(({ id, amount, sum }) => (
    <TransactionRow key={id}>
      <TransactionItem>{amount}</TransactionItem>
      <TransactionItem>{sum}</TransactionItem>
    </TransactionRow>
  ));
}

/* TableBody.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
}; */
