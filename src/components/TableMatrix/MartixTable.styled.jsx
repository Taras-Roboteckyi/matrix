import styled from 'styled-components';

export const Container = styled.div`
  /* width: 1024px; */
  display: flex;
  justify-content: center;
  padding-bottom: 80px;
  padding-left: 100px;
  padding-right: 100px;
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

export const AvarageItem = styled.th`
  width: 100px;
  padding: 10px;
  border: 1px solid #2a2a2a;
  background-color: ${({ theme: { colors } }) => colors.$orange}; ;
`;
