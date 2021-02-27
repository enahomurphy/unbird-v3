import styled from 'styled-components';

export const Options = styled.div`
  width: 100%;
  position: absolute;

  & > *:last-child {
    border-radius: 0 0 8px 8px;
    color: #000;
  }
`;

export const Option = styled.div<{ selected: boolean }>`
  font: normal 14px/14px Source Sans Pro;
  display: flex;
  align-items: center;
  padding-left: 12px;
  height: 40px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.white};
  line-height: 20px;
  font-size: 16px;
  cursor: pointer;

  p {
    color: ${({ theme, selected }) =>
      selected ? theme.colors.white : theme.colors.licorice};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary};

    p {
      color: ${({ theme }) => theme.colors.white};
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
  border-radius: ${({ show }) => (show ? '8px 8px 0 0' : '8px')};

  .input {
    margin: 0 12px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 8px 8px 0 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.tiara};
    font-size: 16px;
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
