import React, { ChangeEvent, FC, ReactElement, useState } from 'react';
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
} from './styles';

interface CheckBoxProps {
  id?: string;
  dataId?: string;
  value?: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<CheckBoxProps> = ({
  id,
  dataId,
  value,
  checked = false,
  onChange,
}): ReactElement => {
  const [state, setState] = useState<boolean>(checked);
  const handleCheckboxChange = (event) => {
    setState(event.target.checked);
    onChange(event);
  };
  return (
    <CheckboxContainer>
      <HiddenCheckbox
        checked={state}
        id={id}
        dataId={dataId}
        value={value}
        onChange={handleCheckboxChange}
      />
      <StyledCheckbox checked={state}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

export default Checkbox;
