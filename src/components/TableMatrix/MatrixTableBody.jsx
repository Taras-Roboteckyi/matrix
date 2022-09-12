import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { ItemsSelectors, ItemsSlice } from '../../redux/items';

import { TableFoot } from './MatrixTableFoot';
import ButtonDelete from '../ButtonDelete/ButtonDelete';

import {
  TransactionRow,
  AverageItem,
  AmountItem,
  SumItem,
  AmountContainer,
  SumItemContainer,
  PercentItem,
  PercentContainer,
  PercentItemContainer,
} from './MartixTable.styled';

export function TableBody() {
  const dataMatrixLine = useSelector(ItemsSelectors.getDataMatrixLine);
  const { averageValues } = useSelector(ItemsSelectors.getDataMatrixAverage);
  const [isHoverAmount, setIsHoverAmount] = useState(null);
  const diapasonX = useSelector(ItemsSelectors.getDataForm);

  /* const { row, index, mouseEnter, mouseLeave, hover } = props; */
  /* const totalSum = useSelector(ItemsSelectors.getTotalSum); */
  const dispatch = useDispatch();
  /* const line = row.slice(0, row.length - 1); */

  const total = averageValues[averageValues.length - 1]; /////Знаходим загальну суму матриці

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
        const differenceAmounts = Math.abs(item.amount - electIdAmount?.amount);
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
  console.log('isHoverAmount', isHoverAmount);

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
            <AmountItem key={row.id}>
              {row.amount && (
                <AmountContainer
                  key={row.id}
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
                </AmountContainer>
              )}
              {row.sum && (
                <SumItemContainer>
                  <SumItem>{row.sum}</SumItem>
                  <PercentItemContainer>
                    <PercentItem>{Math.ceil((row.sum / total.totalSum) * 100)}%</PercentItem>
                    <PercentContainer calc={(row.sum / total.totalSum) * 100}></PercentContainer>
                  </PercentItemContainer>
                </SumItemContainer>
              )}
            </AmountItem>
          ))}

          <ButtonDelete tableRowIndex={index} />
        </TransactionRow>
      ))}

      <TableFoot footer={averageValues} totalSum={total} /* dataMatrix={dataMatrixLine} */ />
    </tbody>
  );
}
