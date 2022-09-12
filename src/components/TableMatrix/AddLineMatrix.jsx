import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';

import { ItemsSelectors } from '../../redux/items';

import AddButton from '../AddButton/AddButton';

export function AddLineMatrix() {
  const dataForm = useSelector(ItemsSelectors.getDataForm);
  const dataLine = useSelector(ItemsSelectors.getDataMatrixLine);

  const column = dataForm.column;

  //Створюєм новий рядок для матриці

  const newLine = () => {
    let line = [];
    for (let n = 0; n < column; n++) {
      line[n] = { id: nanoid(), amount: Math.floor(Math.random() * (1000 - 1) + 1) }; //Створюєм значення amount
    }
    const sum = line.reduce((previousValue, number) => {
      return previousValue + number.amount;
    }, 0);
    line.push({ id: nanoid(), sum });
    return line;
  };

  return (
    <tfoot>
      <tr>{dataLine.length > 0 && <AddButton addLine={newLine} />}</tr>
    </tfoot>
  );
}
