import styled from 'styled-components';

export const Container = styled.td`
  padding-top: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  /*  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 5px;
  left: -50px;
  width: 50px;
 
  color: ${({ theme: { colors } }) => colors.$blue};

  transition: color cubic-bezier(0.4, 0, 0.2, 1) 500ms;
  cursor: pointer;
  &:hover {
    color: ${({ theme: { colors } }) => colors.$red};
  } */
`;

export const ContainerIcon = styled.div`
  padding: 0 20px;
  cursor: pointer;
  border: 1px solid ${({ theme: { colors } }) => colors.$orange};
  border-radius: 5px;
  transition: border cubic-bezier(0.4, 0, 0.2, 1) 500ms;
  &:hover {
    border: 1px solid ${({ theme: { colors } }) => colors.$blue};
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
export const TextHover = styled.p`
  position: absolute;
  top: 30px;
  right: -280px;
  width: 300px;
  font-family: ${({ theme: { fonts } }) => fonts.$gothamPro};
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  line-height: ${({ theme: { lineHeight } }) => lineHeight.gothamProHeight};

  text-align: center;
  color: ${({ theme: { colors } }) => colors.$orange};
`;
