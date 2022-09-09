import { TableItem } from './MatrixTableItem';
import { TransactionRow, AverageItem, AmountItem, SumItem } from './MartixTable.styled';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import { useDispatch, useSelector } from 'react-redux';

import { ItemsSlice, ItemsSelectors } from '../../redux/items';
export function TableRow(props) {
  const { row, index, mouseEnter, mouseLeave, hover } = props;
  /*  const totalSum = useSelector(ItemsSelectors.getTotalSum); */
  const dispatch = useDispatch();
  const line = row.slice(0, row.length - 1);
  const increment = indexNumber => indexNumber + 1;
  const sum = row.find(item => item.sum);
  console.log('sum', sum);
  /* console.log('totalSum', totalSum); */
  /* const dataTableIndex = { indexColumn: tableItemIndex, indexRow: tableRowIndex }; */
  return (
    <>
      <TransactionRow>
        {<AverageItem>{increment(index)}</AverageItem>}
        {line.map((row, indexItem) => (
          /*  <TableItem
            key={row.id}
            rowItem={row}
            tableItemIndex={indexItem}
            tableRowIndex={index}
            mouseEnter={mouseEnter}
            mouseLeave={mouseLeave}
            hover={hover}
          /> */

          <AmountItem
            key={indexItem}
            onClick={() =>
              dispatch(
                ItemsSlice.increment({
                  ...row,
                  indexColumn: indexItem,
                  indexRow: index,
                }),
              )
            }
            /* onMouseEnter={() => mouseEnter(row.id)} */
            /*  onMouseLeave={mouseLeave(null)} */
            /*  activeClassName={a?.isHovered} */
          >
            {row.amount}
          </AmountItem>
        ))}
        <SumItem key={row.id}>{sum.sum}</SumItem>

        <ButtonDelete tableRowIndex={index} />
      </TransactionRow>
    </>
  );
}
