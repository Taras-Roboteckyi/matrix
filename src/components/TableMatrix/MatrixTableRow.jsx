import { TableItem } from './MatrixTableItem';
import { TransactionRow, AverageItem } from './MartixTable.styled';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
export function TableRow(props) {
  const { row, index } = props;

  const increment = indexNumber => indexNumber + 1;
  /* console.log(index); */

  /* const dataTableIndex = { indexColumn: tableItemIndex, indexRow: tableRowIndex }; */
  return (
    <>
      <TransactionRow>
        {<AverageItem>{increment(index)}</AverageItem>}
        {row.map((row, indexItem) => (
          <TableItem key={row.id} rowItem={row} tableItemIndex={indexItem} tableRowIndex={index} />
        ))}

        <ButtonDelete tableRowIndex={index} />
      </TransactionRow>
    </>
  );
}
