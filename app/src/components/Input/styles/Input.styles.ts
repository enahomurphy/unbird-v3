import styled from 'styled-components';

export const CustomInput = styled.div<{ widthAttr?: string, heightAttr?: string, borderRadius?: string, textAlign?: string, errorMessage?: string }>`
  display: flex;
  flex-direction: column;

  input {
    height: 38px;
    background: ${({ theme }) => theme.colors.white};
    border: ${({ theme, errorMessage }) => `1px solid ${ errorMessage? theme.colors.pinkTint200 : theme.colors.tiara}`};
    box-sizing: border-box;
    border-radius: ${({ borderRadius }) => borderRadius? borderRadius : '44px' };
    z-index: 5;
    width: ${({ widthAttr }) => widthAttr ? widthAttr : '100%'};
    height: ${({ heightAttr }) => heightAttr ? heightAttr : ''};
    text-align: ${({ textAlign }) => textAlign ? textAlign : '' };

    &[type] {
      color: ${({ theme }) => theme.colors.licorice};
      padding: 9px 12px;
      font-size: 16px;
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.licorice};
      opacity: 0.5;
    }
  }
`;

export const ErrorMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.inputError};
  width: 100%;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 8px 15px;
  border-radius: 0 0 20px 20px;
  font-size: 12px;
  Line-height: 14px;
  color: #E86262;


  &::before {
    content: ' ';
    position: absolute;
    bottom: 95%;
    left: 1%;
    margin-left: -3px;
    border-width: 10px;
    border-style: solid;
    border-color: #FAEAEA;
  }

  &::after {
    content: ' ';
    position: absolute;
    bottom: 95%;
    left: 99%;
    margin-left: -17px;
    border-width: 10px;
    border-style: solid;
    border-color: #FAEAEA;
  }
`;

export const InputErrorMessage = styled.div<{ widthAttr?: string }>`
  background-color: ${({ theme }) => theme.colors.inputError};
  width: ${({ widthAttr }) => widthAttr ? widthAttr : '100%'};
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 8px 15px;
  border-radius: 8px;
  font-size: 12px;
  Line-height: 14px;
  color: #E86262;
  margin-top: 8px;
`;

export const SuccessMessage = styled.div<{ widthAttr?: string }>`
  background-color: ${({ theme }) => theme.colors.greenTint500};
  width: ${({ widthAttr }) => widthAttr ? widthAttr : '100%'};
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 8px 15px;
  border-radius: 8px;
  font-size: 12px;
  Line-height: 14px;
  color: #213245;
  margin-top: 8px;
`;
