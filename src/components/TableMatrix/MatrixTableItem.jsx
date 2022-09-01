import { useDispatch /* , useSelector  */ } from 'react-redux';
import { TransactionItem } from './MartixTable.styled';
import { ItemsSlice } from '../../redux/items';

export function TableItem(props) {
  const dispatch = useDispatch();
  const { amount, sum, id } = props.rowItem;
  /* console.log(id); */

  return (
    <>
      {amount && (
        <TransactionItem /* onClick={() => dispatch(ItemsSlice.increment(id))} */>
          {amount}
        </TransactionItem>
      )}
      {sum && <TransactionItem>{sum}</TransactionItem>}
    </>
  );
}
