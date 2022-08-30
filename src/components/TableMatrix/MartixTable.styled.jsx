import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 80px;
`;

export const MatrixHead = styled.table`
  border-collapse: collapse;
`;

export const TransactionRow = styled.tr`
  padding: 10px;
  border: 1px solid #2a2a2a;
  :nth-child(even) {
    background-color: #eaeae9;
  }
`;

export const TransactionItem = styled.td`
  padding: 10px;
  border: 1px solid #2a2a2a;
  text-align: center;
`;

export const TransactionHeadItem = styled.th`
  padding: 10px;
  border: 1px solid #2a2a2a;
`;
export const TableHeaderStyle = styled.thead`
  background-color: lightblue;
`;
