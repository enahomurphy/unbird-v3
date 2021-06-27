import styled from 'styled-components';

export const Options = styled.div`
  margin-top: 4px;
  width: 100%;
  position: absolute;
  border-radius: 8px;
  background: #FFF;
  padding: 5px;
  border: 1px solid #DADDE0;

  & > *:last-child {
    color: #000;
  }
`;

export const Option = styled.div<{ selected: boolean }>`
  font: normal 14px/14px Source Sans Pro;
  display: flex;
  align-items: center;
  padding-left: 12px;
  height: 38px;
  background-color: ${({ theme, selected }) =>
    selected ? '#D1F3F9' : theme.colors.white};
  line-height: 20px;
  font-size: 10px;
  cursor: pointer;

  p {
    color: ${({ theme, selected }) =>
      selected ? theme.colors.black : theme.colors.licorice};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    background: #D1F3F9;

    p {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const DropDown = styled.div<{ show: boolean }>`
  position: relative;
  width: inherit;
  z-index: ${(props) => (props.show ? 2 : 'initial')};
  cursor: pointer;
`;

export const DropDownInput = styled.div<{ color: string; show: boolean }>`
  position: relative;
  z-index: ${(props) => (props.show ? 2 : 'initial')};
  height: 40px;
  width: inherit;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  border: 1px solid #DADDE0;

  .input {
    margin: 0 12px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 8px 8px 0 0;
    font-size: 10px;
    color: ${({ color, theme }) => (color ? theme.colors[color] : 'initial')};
    padding-right: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;

    span,
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

export const Icon = styled.div<{ show: boolean }>`
  transform: ${({ show }) => (show ? 'rotate(180deg)' : 'rotate(0deg)')};
  position: absolute;
  right: 12px;
  top: ${({ show }) => (show ? '20%' : '30%')};
`;
