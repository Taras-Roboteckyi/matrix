import { TableHeader, TableBody } from './MartixTableHead';

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
