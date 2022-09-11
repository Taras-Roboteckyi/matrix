import { FcAddRow } from 'react-icons/fc';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ItemsSlice } from '../../redux/items';
import { Container, TextHover, ContainerIcon } from './AddButton.styled';

export default function AddButton(props) {
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();
  const { tableRowIndex } = props;

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Container>
      <ContainerIcon>
        <FcAddRow
          size="50px"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => dispatch(ItemsSlice.deleteRow(tableRowIndex))}
        />
      </ContainerIcon>
      <TextHover>- Додайте рядок до таблиці</TextHover>
    </Container>
  );
}
