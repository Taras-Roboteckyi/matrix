import { useSelector } from 'react-redux';
import { ItemsSelectors } from '../../redux/items';
import { TableRow } from './MatrixTableRow';
import { TableFoot } from './MatrixTableFoot';

export function TableBody() {
  const dataMatrixLine = useSelector(ItemsSelectors.getDataMatrixLine);
  const { averageValues } = useSelector(ItemsSelectors.getDataMatrixAverage);
  /* console.log('dataMatrixLine ', dataMatrixLine); */

  return (
    <tbody>
      {dataMatrixLine.map((line, index) => (
        <TableRow key={index} row={line} index={index} />
      ))}
      <TableFoot footer={averageValues} dataMatrix={dataMatrixLine} />
    </tbody>
  );
}
