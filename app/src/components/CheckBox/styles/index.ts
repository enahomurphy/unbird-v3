import { ChangeEvent } from 'react';
import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border-radius: 4px;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: ${({ theme }) => theme.colors.licorice};
  stroke-width: 2px;
`;

interface HiddenCheckBoxProps {
  id?: string;
  dataId?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const HiddenCheckbox = styled.input.attrs<HiddenCheckBoxProps>(
  ({ id, dataId, value, onChange }) => ({
    type: 'checkbox',
    id,
    'data-conversation': dataId,
    value,
    onChange,
  })
)<HiddenCheckBoxProps>`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  background: ${({ checked, theme }) =>
    checked ? theme.colors.white : theme.colors.licorice};
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.white};
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;
