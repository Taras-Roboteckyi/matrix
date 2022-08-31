import { TransactionItem } from './MartixTable.styled';

export function TableItem(props) {
  const { amount, sum } = props.rowItem;

  return (
    <>
      {amount && <TransactionItem>{amount}</TransactionItem>}
      {sum && <TransactionItem>{sum}</TransactionItem>}
    </>
  );
}
