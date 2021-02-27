import { ChangeEvent } from 'react';
import styled from 'styled-components';

export const RadioContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border-radius: 100%;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: ${({ theme }) => theme.colors.licorice};
  stroke-width: 2px;
`;

interface HiddenRadioProps {
  id?: string;
  name?: string;
  dataId?: string;
  value?: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const HiddenRadio = styled.input.attrs<HiddenRadioProps>(
  ({ id, dataId, checked, value, onChange }) => ({
    type: 'radio',
    id,
    'data-conversation': dataId,
    value,
    checked,
    onChange,
  })
)<HiddenRadioProps>`
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

export const StyledRadio = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background: ${({ checked, theme }) =>
    checked ? theme.colors.white : theme.colors.licorice};
  transition: all 150ms;

  ${HiddenRadio}:focus + & {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.white};
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;
