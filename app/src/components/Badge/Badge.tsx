import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { Span } from 'components/Styles';
import RenderIf from 'components/RenderIf/RenderIf';

export interface BadgeProps {
  count: number;
  canShow: boolean;
}

const BadgeContainer = styled.span`
  width: 18px;
  padding: 2px;
  border-radius: 10px;
  background-color: red;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Badge: FC<BadgeProps> = ({ count, canShow }): ReactElement => (
  <RenderIf isTrue={canShow && count > 0}>
    <BadgeContainer>
      <Span fontWeight="700" fontSize="12px">
        {count}
      </Span>
    </BadgeContainer>
  </RenderIf>
);

export default Badge;
