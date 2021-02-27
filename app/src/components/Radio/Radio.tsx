import React, { ChangeEvent, FC, ReactElement } from 'react';
import { RadioContainer, HiddenRadio, StyledRadio, Icon } from './styles';

interface RadioProps {
  id?: string;
  dataId?: string;
  value?: string;
  checked: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Radio: FC<RadioProps> = ({
  id,
  dataId,
  value,
  checked,
  onChange,
}): ReactElement => {
  return (
    <RadioContainer>
      <HiddenRadio
        id={id}
        dataId={dataId}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      <StyledRadio checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledRadio>
    </RadioContainer>
  );
};

export default Radio;
