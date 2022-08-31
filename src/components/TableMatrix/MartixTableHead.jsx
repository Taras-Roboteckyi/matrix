/* import PropTypes from 'prop-types'; */

import { useSelector } from 'react-redux';
import { ItemsSelectors } from '../../redux/items';

import { TransactionRow, TransactionHeadItem, TableHeaderStyle } from './MartixTable.styled';

export function TableHeader() {
  const dataMatrixLine = useSelector(ItemsSelectors.getDataMatrixLine);

  const lineIndexArray = data => [...data[0]];

  const lineIndex = lineIndexArray(dataMatrixLine);
  /* console.log('lineIndex', lineIndex);
  console.log('dataMatrixLine', dataMatrixLine); */
  return (
    <TableHeaderStyle>
      <TransactionRow>
        {lineIndex.map((_, index) => (
          <TransactionHeadItem key={index}>{index}</TransactionHeadItem>
        ))}
        <TransactionHeadItem>Сума по рядку</TransactionHeadItem>
      </TransactionRow>
    </TableHeaderStyle>
  );
}
