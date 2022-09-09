import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { ItemsSelectors, ItemsSlice } from '../../redux/items';
import { TableRow } from './MatrixTableRow';
import { TableFoot } from './MatrixTableFoot';
import ButtonDelete from '../ButtonDelete/ButtonDelete';

import { TransactionRow, AverageItem, AmountItem, SumItem } from './MartixTable.styled';

export function TableBody() {
  const dataMatrixLine = useSelector(ItemsSelectors.getDataMatrixLine);
  const { averageValues } = useSelector(ItemsSelectors.getDataMatrixAverage);
  const [isHoverAmount, setIsHoverAmount] = useState(null);
  const diapasonX = useSelector(ItemsSelectors.getDataForm);

  /* const { row, index, mouseEnter, mouseLeave, hover } = props; */
  /* const totalSum = useSelector(ItemsSelectors.getTotalSum); */
  const dispatch = useDispatch();
  /* const line = row.slice(0, row.length - 1); */

  const increment = indexNumber => indexNumber + 1; //Додаєм нумерацію клітинок-ячейок

  /* console.log('totalSum', totalSum); */

  /* console.log('dataMatrixLine ', dataMatrixLine); */
  /* useEffect(() => {}, [dataMatrixLine, diapasonX.range]); */
  console.log('dataMatrixLine ', dataMatrixLine);
  /* 
  if (dataMatrixLine.length === 0) {
    return null;
  } */

  /////////Фільтруєм матрицю тільки по значенню amount/////////////////////
  const arrayMatrix = dataMatrixLine
    .reduce((allTags, item) => {
      allTags.push(...item);

      return allTags;
    }, [])
    .filter(({ amount }) => amount);
  //console.log('arrayMatrix', arrayMatrix);

  /////////Шукаєм функцією підсвічені клітинки-ячейки/////////////////////

  const handleMouseEnterAmount = idAmount => {
    //console.log(idAmount);
    //console.log('dataMatrix', dataMatrix);

    const electIdAmount = arrayMatrix.find(el => el.id === idAmount);

    const arrayOfTemporaryAmount = arrayMatrix.reduce((arr, item) => {
      if (item.id === idAmount) {
        return arr;
      } else {
        const differenceAmounts = Math.abs(item.amount - electIdAmount.amount);
        const newAmount = { ...item, different: differenceAmounts }; //додаєм різницю чисел щоб знайти необхідні числа
        //delete newAmount.amount;
        //console.log('arr', arr);
        return [...arr, newAmount];
      }
    }, []);

    ///////Сортруєм новий масив і обрізаєм Х клітинок-ячейок//////////////

    const newArrayOnMouseEnter = [...arrayOfTemporaryAmount]
      .sort((a, b) => {
        return a.different - b.different;
      })
      .slice(0, diapasonX.range);
    /* console.log('newArrayOnMouseEnter', newArrayOnMouseEnter); */
    setIsHoverAmount(newArrayOnMouseEnter);

    //return newArrayOnMouseEnter;
  };

  ////////////Шукаєм новий масив і //додаєм нову властивість обєкта на тих ячейках які найближчі до підсвіченої клітинки

  /* const findNewArray = () => {
    return arrayMatrix.map(el => {
      const hoveredObject = isHoverAmount?.find(({ id }) => id === el.id); // return object or undefined

      if (!hoveredObject) {
        return { ...el, isHovered: false };
      }

      return { ...hoveredObject, isHovered: true };
    });
  }; */

  /* const b = findNewArray();

  console.log('b()', b); */
  /* console.log('findNewArray', findNewArray()); */

  return (
    <tbody>
      {dataMatrixLine.map((line, index) => (
        /*  <TableRow
          key={index}
          row={line}
          index={index}
          mouseEnter={handleMouseEnterAmount}
          mouseLeave={setIsHoverAmount}
          hover={b}
        /> */
        <TransactionRow key={index}>
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
              onMouseEnter={() => handleMouseEnterAmount(row.id)}
              onMouseLeave={() => setIsHoverAmount(null)}
              activeClassName={isHoverAmount?.find(({ id }) => id === row.id)}
            >
              {row.amount}
              {row.sum && <SumItem>{row.sum}</SumItem>}
            </AmountItem>
          ))}

          <ButtonDelete tableRowIndex={index} />
        </TransactionRow>
      ))}
      <TableFoot footer={averageValues} /* dataMatrix={dataMatrixLine} */ />
    </tbody>
  );
}
