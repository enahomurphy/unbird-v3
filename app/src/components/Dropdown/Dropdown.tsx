import React, { useState } from 'react';

import { Div } from 'components/Styles'
import { DropdownWrapper } from './styles';

const Dropdown = ({ TopComponent, children, left = "28px", top="54px", width="224px", right, bottom, minHeight="200px" }: {
  TopComponent: React.ReactNode;
  children: React.ReactNode;
  left?: string;
  top?: string;
  width?: string;
  right?: string;
  bottom?: string;
  minHeight?: string;
}) => {
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

export default Dropdown;
