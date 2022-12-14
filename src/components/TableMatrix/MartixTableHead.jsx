/* import PropTypes from 'prop-types'; */

import { useSelector } from 'react-redux';
import { ItemsSelectors } from '../../redux/items';

import { TransactionRow, TransactionHeadItem, TableHeaderStyle } from './MartixTable.styled';

export function TableHeader() {
  const dataMatrixLine = useSelector(ItemsSelectors.getDataMatrixLine);

  if (dataMatrixLine.length === 0) {
    return null;
  }
  const lineIndexArray = data => [...data[0]];

  const lineIndex = lineIndexArray(dataMatrixLine);

  return (
    <TableHeaderStyle>
      <TransactionRow>
        {lineIndex &&
          lineIndex.map((_, index) => (
            <TransactionHeadItem key={index}>{index}</TransactionHeadItem>
          ))}
        <TransactionHeadItem>Сума по рядку</TransactionHeadItem>
      </TransactionRow>
    </TableHeaderStyle>
  );
}
