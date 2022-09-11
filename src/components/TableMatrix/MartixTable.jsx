import { TableHeader } from './MartixTableHead';
import { TableBody } from './MatrixTableBody';
import { AddLineMatrix } from './AddLineMatrix';

import { Container, MatrixHead } from './MartixTable.styled';

export default function MatrixTable() {
  return (
    <Container>
      <MatrixHead>
        <TableHeader />
        <TableBody />
        <AddLineMatrix />
      </MatrixHead>
    </Container>
  );
}
