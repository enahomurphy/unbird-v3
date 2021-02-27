import { Check, Close } from 'components/Icons';
import React, { FC, ReactElement } from 'react';
import { useTheme } from 'styled-components';
import { ToggleDialog, ToggleWrapper } from './styles/ToggleButton';

export interface ToggleButtonProps {
  selected: boolean;
  toggle: () => void;
}

const ToggleButton: FC<ToggleButtonProps> = ({
  toggle,
  selected,
}): ReactElement => {
  const theme = useTheme();
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };
  return (
    <ToggleWrapper selected={selected} onClick={() => toggle()}>
      <ToggleDialog layout transition={spring} selected={selected}>
        {selected ? (
          <Check width="16" height="16" fill={theme.colors.fresh} />
        ) : (
          <Close width="18" height="18" fill={theme.colors.licorice} />
        )}
      </ToggleDialog>
    </ToggleWrapper>
  );
};

export default ToggleButton;
