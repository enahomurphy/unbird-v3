import { Div } from 'components/Styles';
import React, { FC, ReactElement, CSSProperties } from 'react';

interface ItemProps {
  style: CSSProperties;
  children: React.ReactNode;
  onMouseOver: () => void;
  onClick: () => void;
}

const ListItem: FC<ItemProps> = ({
  style,
  children,
  onMouseOver = () => {},
  onClick = () => {},
}: ItemProps): ReactElement => {
  return (
    <Div onClick={onClick} onMouseOver={onMouseOver} style={style}>
      {children}
    </Div>
  );
};

export default ListItem;
