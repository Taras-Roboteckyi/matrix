import PropTypes from 'prop-types';

import { totalMatrix } from '../../utils/matrix';

import { TransactionRow, TransactionItem, AverageItem, Total } from './MartixTable.styled';

export function TableFoot(props) {
  const averageValues = props.footer;
  const dataMatrixTable = props.dataMatrix;
  /* console.log('averageValues', averageValues); */
  const textAverage = 'Середнє значення по стовчиках';

  const total = totalMatrix(dataMatrixTable);
  /* console.log(total); */

  return (
    <TransactionRow>
      {averageValues.length > 0 && <AverageItem>{textAverage}</AverageItem>}
      {averageValues.map((row, index) => (
        <TableFootItem key={index} footItem={row} />
      ))}
      {averageValues.length > 0 && <Total>Загальна сума: {total}</Total>}
    </TransactionRow>
  );
}

function TableFootItem(props) {
  const { footItem } = props;

  return <>{footItem && <TransactionItem>{footItem}</TransactionItem>}</>;
}

TableFoot.propTypes = {
  averageValues: PropTypes.arrayOf(PropTypes.number),
};
