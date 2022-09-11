import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  max-width: 1280px;
  padding: 30px 20px;
`;

export const Title = styled.h1`
  font-family: ${({ theme: { fonts } }) => fonts.$gothamPro};
  font-weight: 700;
  font-style: normal;
  font-size: 35px;
  line-height: ${({ theme: { lineHeight } }) => lineHeight.gothamProHeight};
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.$orange};
  margin-bottom: 60px;
`;

export const HeroText = styled.p`
  font-family: ${({ theme: { fonts } }) => fonts.$gothamPro};
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: ${({ theme: { lineHeight } }) => lineHeight.verdanaHeight};

  /* text-align: center; */
  color: ${({ theme: { colors } }) => colors.$black};
  margin-bottom: 20px;
`;

export const ItemText = styled.span`
  color: ${({ theme: { colors } }) => colors.$red};
`;

export const TitleDynamic = styled.h2`
  font-family: ${({ theme: { fonts } }) => fonts.$gothamPro};
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  line-height: ${({ theme: { lineHeight } }) => lineHeight.gothamProHeight};

  color: ${({ theme: { colors } }) => colors.$black};
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-family: ${({ theme: { fonts } }) => fonts.$gothamPro};
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: ${({ theme: { lineHeight } }) => lineHeight.$gothamPro};

  /* text-align: center; */
  color: ${({ theme: { colors } }) => colors.$black};
  margin-bottom: 10px;
`;
