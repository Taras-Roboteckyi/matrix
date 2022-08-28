import { useEffect } from 'react';

/* import { useDispatch useSelector  } from 'react-redux'; */
import HomePage from './views/HomePage';

export default function App() {
  /* const dispatch = useDispatch(); */
  /* const isRefetchingPage = useSelector(authSelectors.getRefetchingPage); */
  //console.log(isRefetchingPage);

  useEffect(() => {}, []);

  return (
    <>
      <HomePage />
    </>
  );
}
