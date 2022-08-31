import { TableHeader } from './MartixTableHead';
import { TableBody } from './MatrixTableBody';

import { Container, MatrixHead } from './MartixTable.styled';

export default function MatrixTable() {
  return (
    <Container>
      <MatrixHead>
        <TableHeader />
        <TableBody />
      </MatrixHead>
    </Container>
  );
}
