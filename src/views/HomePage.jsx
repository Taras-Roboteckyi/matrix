import { useEffect } from 'react';
import Matrix from '../utils/matrix';
/* import { useDispatch useSelector  } from 'react-redux'; */
import { Form } from '../components/Form/Form';

export default function HomePage() {
  /* const dispatch = useDispatch(); */
  /* const isRefetchingPage = useSelector(authSelectors.getRefetchingPage); */
  //console.log(isRefetchingPage);

  useEffect(() => {}, []);
  const dataMatrix = Matrix();
  console.log(dataMatrix);
  return (
    <>
      <Form />
    </>
  );
}
