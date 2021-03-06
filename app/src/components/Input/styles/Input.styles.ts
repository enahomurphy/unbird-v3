import styled from 'styled-components';

export const CustomInput = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:first-of-type) {
    margin-top: 16px;
  }

  input {
    height: 38px;
    background: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => `1px solid ${theme.colors.tiara}`};
    box-sizing: border-box;
    border-radius: 44px;
    z-index: 5;

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
  padding: 0 18px;
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
