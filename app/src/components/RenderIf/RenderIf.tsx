import React, { FC, ReactElement } from 'react';

export interface RenderIfProps {
  isTrue: boolean;
  children: React.ReactNode;
}

const RenderIf: FC<RenderIfProps> = ({
  isTrue,
  children,
}: RenderIfProps): ReactElement => {
  return isTrue ? <>{children}</> : null;
};

export default RenderIf;
