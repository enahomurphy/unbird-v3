import styled from 'styled-components';

export const CustomInput = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:first-of-type) {
    margin-top: 24px;
  }

  input {
    height: 38px;
    background: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => `1px solid ${theme.colors.tiara}`};
    box-sizing: border-box;
    border-radius: 6px;

    &[type='text'] {
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
  background-color: ${({ theme }) => theme.colors.melon};
  width: fit-content;
  height: 40px;
  border-radius: 4px;
  position: absolute;
  right: 15px;
  display: flex;
  align-items: center;
  padding: 0 10px;

  &::after {
    content: ' ';
    position: absolute;
    bottom: 100%;
    left: 85%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${({ theme }) =>
      `transparent transparent ${theme.colors.melon} transparent`};
  }
`;
