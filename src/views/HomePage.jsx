import { useEffect } from 'react';
import Matrix from '../utils/matrix';
import { useDispatch, useSelector } from 'react-redux';

import { ItemsSlice, ItemsSelectors } from '../redux/items';
import { Form } from '../components/Form/Form';
import MatrixTable from '../components/TableMatrix/MartixTable';

export default function HomePage() {
  const data = useSelector(ItemsSelectors.getDataForm);
  const dispatch = useDispatch();
  const dataMatrix = Matrix();

  useEffect(() => {
    dispatch(ItemsSlice.dataMatrix(dataMatrix));
  }, [dataMatrix, dispatch]);

  console.log('dataMatrix', dataMatrix);
  return (
    <>
      <Form />
      {data.row && <MatrixTable />}
    </>
  );
}
