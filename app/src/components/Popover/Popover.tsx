import { Close } from 'components/Icons';
import React, { FC, ReactElement } from 'react';
import * as S from './styles';

interface PopoverProps {
  title: string | ReactElement[];
  body: string | ReactElement[];
  icon: string | ReactElement;
  onClose: () => void;
}

export const Popover: FC<PopoverProps> = ({
  title,
  body,
  icon,
  onClose,
}): ReactElement => {
  return (
    <S.ContentWrapper>
      <S.Close onClick={onClose}>
        <Close fill="black" />
      </S.Close>
      <S.Title>{title}</S.Title>
      <S.Icon role="img" aria-label="icon">
        {icon}
      </S.Icon>
      <S.Body>{body}</S.Body>
    </S.ContentWrapper>
  );
};

export default Popover;
