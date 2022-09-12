import PropTypes from 'prop-types';

import { TransactionRow, TransactionItem, AverageItem, Total } from './MartixTable.styled';

export function TableFoot(props) {
  const averageValues = props.footer;
  const totalSum = props.totalSum;

  const textAverage = 'Середнє значення по стовчиках';

  return (
    <TransactionRow>
      {averageValues.length > 1 && <AverageItem>{textAverage}</AverageItem>}
      {averageValues.slice(0, averageValues.length - 1).map((row, index) => (
        <TableFootItem key={index} footItem={row} />
      ))}
      {averageValues.length > 1 && <Total>Загальна сума: {totalSum.totalSum}</Total>}
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
