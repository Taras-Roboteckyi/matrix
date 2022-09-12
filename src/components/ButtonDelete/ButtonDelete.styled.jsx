import styled from 'styled-components';

export const Container = styled.td`
  position: absolute;
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
  }
`;
export const TextHover = styled.p`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 5px;
  left: -50px;
  width: 50px;

  color: ${({ theme: { colors } }) => colors.$red};

  transition: color cubic-bezier(0.4, 0, 0.2, 1) 1000ms;
`;
