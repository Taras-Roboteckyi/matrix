import { useDispatch /* , useSelector  */ } from 'react-redux';
import { AmountItem, SumItem } from './MartixTable.styled';
import { ItemsSlice } from '../../redux/items';

export function TableItem(props) {
  const dispatch = useDispatch();
  const { amount, sum, id } = props.rowItem;
  /* console.log(id); */

  return (
    <>
      {amount && (
        <AmountItem onClick={() => dispatch(ItemsSlice.increment(props.rowItem))}>
          {amount}
        </AmountItem>
      )}
      {sum && <SumItem>{sum}</SumItem>}
    </>
  );
}
