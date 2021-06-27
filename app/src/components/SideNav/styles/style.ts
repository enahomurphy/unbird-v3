import styled from 'styled-components';

export const UL = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

export const LI = styled.li<{ marginAttr?: string, shrinkSidebar?: boolean }>`
  margin: ${(props) => props.marginAttr || '0 0 0 32px'};
  position: relative;
  font-size: 14px;

  .nav-item {
    cursor: pointer;
    padding: 12px 12px 12px 0;
    max-width: 195px;

    &:hover {
      background: #D1F3F9;
      border-radius: 8px;
      padding-left: 12px;
      display: flex;
      align-items: center;
      transition: padding 0.2s linear;

      .shrinked-tooltip {
        display: block;
      }
    }
  }

  .active {
    background: #D1F3F9;
    border-radius: 8px;
    padding-left: 12px;
    display: flex;
    align-items: center;
    transition: padding 0.2s linear;
  }

  .shrinked-view {
    padding-left: 12px;
  }
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 195px;
  height: 28px;
  padding: 10px;

  &:hover {
    background: #D1F3F9;
    border-radius: 8px;

    p {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const DropdownWrapper = styled.div<{
  showDropdown?: boolean;
  left?: string;
  top?: string;
  width?: string;
  right?: string;
  bottom?: string;
  minHeight?: string;
}>`
  display: ${(props) => (props.showDropdown ? 'block' : 'none')};
  position: absolute;
  background-color: #FFF;
  width: ${(props) => props.width || '224px'};
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  min-height: ${(props) => props.minHeight || '200px'};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  border-radius: 12px;
`;

export const GreenIndicator = styled.div`
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: #12E18A;
  bottom: -1px;
  right: -2px;
  border-radius: 50%;
  border: 2px solid #FFF;
`;

export const WorkspaceItemWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 8px;

  span {
    height: 28px;
    padding: 9px 5px 5px 0;
    transition: padding 0.2s linear;
  }

  &:hover {
    span {
      background: #F0F1F3;
      padding-left: 9px;
      width: 158px;
      border-radius: 8px;
    }
  }
`;
