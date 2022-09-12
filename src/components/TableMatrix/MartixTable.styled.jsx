import styled from 'styled-components';

export const Container = styled.div`
  /* width: 1024px; */
  /* display: flex;
  justify-content: center; */

  padding-bottom: 80px;
  padding-left: 100px;
  padding-right: 100px;
  /* overflow-x: auto;
  overflow-y: auto; */
`;

export const MatrixHead = styled.table`
  border-collapse: collapse;
  margin: auto;
`;

export const TransactionRow = styled.tr`
  position: relative;
  /* padding: 10px;
  border: 1px solid #2a2a2a; */
  :nth-child(even) {
    background-color: ${({ theme: { colors } }) => colors.$white};
  }
`;

export const TransactionItem = styled.td`
  width: 50px;
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

export const AverageItem = styled.td`
  width: 100px;
  padding: 10px;
  border: 1px solid #2a2a2a;
  text-align: center;
  background-color: ${({ theme: { colors } }) => colors.$yellow};
`;

export const AmountItem = styled.td`
  padding: 0px;
  position: relative;
  overflow: hidden;
  border: 1px solid #2a2a2a;
  text-align: center;
  cursor: pointer;
  /*  :nth-last-child(n + 2) {
    cursor: pointer;
  } */
  /* :nth-last-child(n + 2) {
    background-color: ${props => (props.activeClassName ? 'pink' : 'inherit')};
    :hover {
      background-color: ${({ theme: { colors } }) => colors.$red};
    }
  } */
`;

export const AmountContainer = styled.div`
  /* padding: 10px; */
  height: 25px;
  padding-top: 10%;
  padding-bottom: 10%;
  /* text-align: center; */
  cursor: pointer;

  background-color: ${props => (props.activeClassName ? 'pink' : 'inherit')};
  :hover {
    background-color: ${({ theme: { colors } }) => colors.$red};
  }
`;

export const SumItemContainer = styled.div`
  /*  padding: 0;
  height: 38px;

  text-align: center; */
  /*  :hover {
    background-color: pink;
  } */
`;

export const PercentItemContainer = styled.div`
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0px;
  width: 100%;
  /* padding: 0;
  
  opacity: 1; */
  text-align: center;

  /* opacity: 0; */
  :hover {
    background-color: rgba(33, 150, 243, 0.9);
    opacity: 1;
  }
`;

export const PercentItem = styled.div`
  position: absolute;
  top: 0;
  left: 0px;
  width: 100%;
  /* height: 38px; */
  text-align: center;
  z-index: 999;
  opacity: 0;
  /* background-color: rgba(33, 150, 243, 0.9); */
  color: #ffffff;
  transform: translateY(100%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  /* overflow: auto; */
  ${PercentItemContainer}:hover & {
    opacity: 1;
    transform: translateY(0%);

    /* background-color: ${({ theme: { colors } }) => colors.$red}; */
  }
`;
export const PercentContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0px;
  width: 100%;
  height: ${props => props.calc}%;

  text-align: center;

  opacity: 0;
  background-color: rgba(33, 150, 243, 0.9);
  color: #ffffff;
  transform: translateY(100%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${PercentItemContainer}:hover & {
    opacity: 1;
    transform: translateY(0%);
    background-color: ${({ theme: { colors } }) => colors.$red};
  }
  /*  :hover {
    opacity: 1;
    transform: translateY(100%);

    background-color: ${({ theme: { colors } }) => colors.$orange};
  } */
`;

export const SumItem = styled.div`
  height: 32px;
  padding-top: 6px;
  /*  padding-top: 8%;
  padding-bottom: 8%; */
  text-align: center;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  /* overflow: auto; */
  /*  :hover {
    opacity: 0;
    transform: translateY(0);
    z-index: -2;
  } */
`;

export const Total = styled.td`
  font-weight: bold;
  width: 50px;
  padding: 10px;
  border: 1px solid #2a2a2a;
  text-align: center;
  background-color: ${({ theme: { colors } }) => colors.$yellow};
`;
