import styled from 'styled-components';

export const AsideWrapper = styled.aside<{ width?: string }>`
  min-width: ${props => props.width || '260px'};
  background-color: #F9FAFA;
  min-height: 100vh;
  transition: 0.1s all linear;
  display: flex;
  flex-direction: column;
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
