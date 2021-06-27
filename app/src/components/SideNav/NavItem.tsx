import React from 'react';

import { Div, Span } from 'components/Styles'
import { NavItem } from './styles/style';

type Props = {
  icon: any;
  text: string;
};

const DropDownNavItem = ({ icon, text }: Props) => {
  return (
    <NavItem>
      <Div marginRight="10px">{icon}</Div>
      <Span>{text}</Span>
    </NavItem>
  );
};

export default DropDownNavItem;
