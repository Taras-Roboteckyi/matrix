import styled from 'styled-components';

export const Section = styled.section`
  margin: 0 auto;
  padding: 40px 0px;

  font-family: ${prop => prop.theme.fonts.$verdana};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  padding-top: 30px;

  .form-title {
    font-family: ${({ theme: { fonts } }) => fonts.$gothamPro};
    font-weight: 700;
    font-style: normal;
    font-size: 25px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.gothamProHeight};
    text-transform: uppercase;
    text-align: center;
    color: ${({ theme: { colors } }) => colors.$orange};
    margin-bottom: 60px;
  }

  .form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container-input {
    height: 60px;
    width: 220px;
  }

  .form-input {
    height: 40px;
    width: 150px;

    padding-left: 20px;
    text-align: center;
    border: 2px solid #fc842d;
    border-radius: 5px;

    outline: invert;

    background: ${({ theme: { colors } }) => colors.$white};

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.21;
    letter-spacing: 0.04em;
    color: ${prop => prop.theme.colors.$orange};
  }

  .form-input-error {
    width: 240px;
    color: red;
    font-size: 12px;
  }

  .buttons {
    height: 60px;

    .button {
      width: 182px;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;

      font-family: ${({ theme: { fonts } }) => fonts.verdana};
      font-weight: 700;
      font-size: 14px;
      line-height: ${({ theme: { lineHeight } }) => lineHeight.verdana};
      align-items: center;
      text-align: center;
      letter-spacing: 0.04em;
      background: ${({ theme: { colors } }) => colors.$white};
      color: ${({ theme: { colors } }) => colors.$orange};
      box-shadow: ${({ theme: { options } }) => options.buttonShadow};
      border: 2px solid #fc842d;
      border-radius: ${({ theme: { options } }) => options.radius};
      cursor: pointer;
      align-self: center;
      transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1), border 0.5s cubic-bezier(0.4, 0, 0.2, 1),
        background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        background: #ff6b08;
        border-radius: #ff6b08;
        color: ${prop => prop.theme.colors.$white};
        box-shadow: 0 8px 43px rgb(255 107 1 / 60%);
      }
    }
  }
`;
