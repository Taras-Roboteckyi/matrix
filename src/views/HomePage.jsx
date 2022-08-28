import { useEffect } from 'react';
import { nanoid } from 'nanoid';
/* import { useDispatch useSelector  } from 'react-redux'; */
import { Form } from '../components/Form/Form';

export default function HomePage() {
  /* const dispatch = useDispatch(); */
  /* const isRefetchingPage = useSelector(authSelectors.getRefetchingPage); */
  //console.log(isRefetchingPage);

  useEffect(() => {}, []);

  const line = 2;
  const column = 3;
  /* const x = 3; */
  let result = [];

  ///////////////Створюєм матрицю////////////

  const matrix = () => {
    for (let m = 0; m < line; m++) {
      result[m] = [];

      for (let n = 0; n < column; n++) {
        result[m][n] = { id: nanoid(), amount: Math.floor(Math.random() * (1000 - 0) + 0) }; //Створюєм значення amount
      }
    }
    return result;
  };

  //////Знаходим середнє значення стовчиків матриці/////////

  const average = () => {
    let tempArray = []; // тимчасова змінна зовні обявлена зовні області розрахунків (або стейт, як в мене по логіці)

    for (let rowMatrix = 0; rowMatrix < column; rowMatrix += 1) {
      let average = 0;

      for (let row = 0; row < line; row += 1) {
        /* console.log('average: ', result); */
        average += result[row][rowMatrix].amount; //вказує поле по якому рахуєш
      }
      const averageValue = Number((average / result.length).toFixed(2));
      tempArray[rowMatrix] = averageValue; // записуємо в тимчасовий масив
    }

    result = [...result, { averageV: tempArray }]; // розпиляємо і додаємо масив з середнім арифметичним

    /* console.log('averageValue: ', result); */
    return result;
  };

  /* console.log('matrix: ', result) */

  ///////Знаходим суму рядків матриці///////////////

  const sum = () => {
    let sumArray = []; // тимчасова змінна зовні обявлена зовні області розрахунків (або стейт, як в мене по логіці)

    for (let i = 0; i < line; i++) {
      let sum = 0;

      for (let row = 0; row < result[i].length; row++) {
        sum += result[i][row].amount; //вказує поле по якому рахуєш
      }
      sumArray[i] = sum; // записуємо в тимчасовий масив

      result[i].push({ id: nanoid(), sum: sumArray[i] }); // додаєм обєкт з порахованою сумою по рядку
    }

    /* console.log('result: ', result); */

    return result;
  };

  console.log('matrix: ', matrix());
  console.log('average: ', average());
  console.log('sum: ', sum());

  return (
    <>
      <Form />
    </>
  );
}
