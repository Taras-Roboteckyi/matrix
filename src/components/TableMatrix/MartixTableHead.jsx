import PropTypes from 'prop-types';

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

export function TableBody(props) {
  const dataMatrix = useSelector(ItemsSelectors.getDataMatrix);
  console.log(dataMatrix);

  return (
    <tbody>
      {/*  {props.items.map(({ id, type, amount, currency }) => (
        <TableRow key={id} row={{ type, amount, currency }} />
      ))} */}
    </tbody>
  );
}

function TableRow(props) {
  const { type, amount, currency } = props.row;

  return (
    <TransactionRow>
      <TransactionItem>{type}</TransactionItem>
      <TransactionItem>{amount}</TransactionItem>
      <TransactionItem>{currency}</TransactionItem>
    </TransactionRow>
  );
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
