import { nanoid } from 'nanoid';

import { useSelector } from 'react-redux';
import { ItemsSelectors } from '../redux/items';

export default function Matrix() {
  const dataForm = useSelector(ItemsSelectors.getDataForm);

  const line = dataForm.row;
  const column = dataForm.column;

  let result = [];

  ///////////////Створюєм матрицю////////////

  const matrixBasis = () => {
    for (let m = 0; m < line; m++) {
      result[m] = [];

      for (let n = 0; n < column; n++) {
        result[m][n] = { id: nanoid(), amount: Math.floor(Math.random() * (1000 - 1) + 1) }; //Створюєм значення amount
      }
    }

    return result;
  };

  ///////Знаходим суму рядків матриці///////////////

  const sum = () => {
    let sumArray = []; // тимчасова змінна  області розрахунків

    for (let i = 0; i < line; i++) {
      let sum = 0;

      for (let row = 0; row < result[i].length; row++) {
        sum += result[i][row].amount; //вказує поле по якому рахуєш
      }
      sumArray[i] = sum; // записуємо в тимчасовий масив

      result[i].push({ id: nanoid(), sum: sumArray[i] }); // додаєм обєкт з порахованою сумою по рядку
    }

    return result;
  };

  //////Знаходим середнє значення стовчиків матриці/////////

  const average = () => {
    let tempArray = []; // тимчасова змінна зовні обявлена зовні області розрахунків (або стейт, як в мене по логіці)

    for (let rowMatrix = 0; rowMatrix < column; rowMatrix += 1) {
      let average = 0;

      for (let row = 0; row < line; row += 1) {
        average += result[row][rowMatrix].amount; //вказує поле по якому рахуєш
      }
      const averageValue = Number((average / result.length).toFixed(2));
      tempArray[rowMatrix] = averageValue; // записуємо в тимчасовий масив
    }

    ///////Знаходим загальну суму рядків матриці///////////////

    const totalMatrix = data => {
      return data
        .map(line =>
          line.reduce((sum, element) => {
            if (element.sum) {
              return sum + element.sum;
            }
            return sum;
          }, 0),
        )
        .reduce((total, element) => {
          return total + element;
        }, 0);
    };
    const Total = totalMatrix(result);

    result = [...result, { averageValues: [...tempArray, { totalSum: Total }] }]; // розпиляємо і додаємо масив з середнім арифметичним і загальну суму

    return result;
  };

  matrixBasis();
  sum();
  average();

  return result;
}
