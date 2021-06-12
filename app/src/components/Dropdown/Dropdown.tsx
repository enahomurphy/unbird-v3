import React, { useState } from 'react';

import { Div } from 'components/Styles';
import { DropdownWrapper } from './styles';

export interface DropdownProps {
  TopComponent: React.ReactNode;
  children: React.ReactNode;
  left?: string;
  top?: string;
  width?: string;
  right?: string;
  bottom?: string;
  minHeight?: string;
};

const Dropdown = ({
  TopComponent,
  children,
  left,
  top,
  width,
  right,
  bottom,
  minHeight,
}: DropdownProps) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  return (
    <>
      <Div onClick={() => setShowDropdown(!showDropdown)}>{TopComponent}</Div>
      <DropdownWrapper
        showDropdown={showDropdown}
        left={left}
        top={top}
        bottom={bottom}
        right={right}
        minHeight={minHeight}
        width={width}
      >
        {children}
      </DropdownWrapper>
    </>
  );
};

Dropdown.defaultProps = {
  left: '28px',
  top: '54px',
  width: '224px',
  minHeight: '200px'
};

export default Dropdown;
