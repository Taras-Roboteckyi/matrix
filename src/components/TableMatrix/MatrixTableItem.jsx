import { useDispatch /* , useSelector  */ } from 'react-redux';
import { AmountItem, SumItem } from './MartixTable.styled';
import { ItemsSlice } from '../../redux/items';

export function TableItem(props) {
  const dispatch = useDispatch();
  const { rowItem, tableItemIndex, tableRowIndex } = props;
  const { amount, sum } = rowItem;

  /* console.log('props.tableItemIndex ', tableItemIndex);
  console.log('props.rowItem ', rowItem); */
  const dataTableItem = { ...rowItem, indexColumn: tableItemIndex, indexRow: tableRowIndex };

  return (
    <>
      {amount && (
        <AmountItem onClick={() => dispatch(ItemsSlice.increment(dataTableItem))}>
          {amount}
        </AmountItem>
      )}
      {sum && <SumItem>{sum}</SumItem>}
    </>
  );
}
