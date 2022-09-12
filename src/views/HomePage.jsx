import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Matrix from '../utils/matrix';
import HeroSection from '../components/HeroSection/HeroSection';
import { ItemsSlice, ItemsSelectors } from '../redux/items';
import { Form } from '../components/Form/Form';
import MatrixTable from '../components/TableMatrix/MartixTable';

export default function HomePage() {
  const data = useSelector(ItemsSelectors.getDataForm);
  const isLoading = useSelector(ItemsSelectors.getIsReducerSpinner);
  const dispatch = useDispatch();
  const dataMatrix = Matrix();

  useEffect(() => {
    dispatch(ItemsSlice.dataMatrix(dataMatrix));
  }, [dataMatrix, dispatch]);
  /* if (dataMatrix.length === 1) {
    return null;
  } */

  console.log('isLoading', isLoading);
  return (
    <>
      <HeroSection />
      <Form />
      {isLoading && <p>Donloading..........</p>}
      {data.row && <MatrixTable />}
    </>
  );
}
