import React, { FC } from 'react';

import { Div } from 'components/Styles/Element';
import { Color } from 'lib/themes/interface';
import RenderIf from 'components/RenderIf';
import { Check } from 'components/Icons';

interface IChecker {
  error?: boolean;
  checked?: boolean;
  active?: boolean;
}
const Checker: FC<IChecker> = ({ error, checked, active }) => (
  <Div
    width={active ? '32px' : '24px'}
    height={active ? '32px' : '24px'}
    borderRadius="50%"
    background={Color.white}
    border={`1.5px solid ${error ? 'red' : '#05C1E0'}`}
  >
    <RenderIf isTrue={!error}>
      <RenderIf isTrue={checked}>
        <Div
          style={{
            transform: `${
              active ? 'translate(20%, 25%)' : 'translate(1.6px, 1px)'
            }`,
          }}
        >
          <Check fill="#18C1E0" width="16" height="16" />
        </Div>
      </RenderIf>
    </RenderIf>
    <RenderIf isTrue={error}>
      <Div
        width="16px"
        height="16px"
        border="1px solid red"
        borderRadius="50%"
        style={{
          transform: `${
            active ? 'translate(42%, 42%)' : 'translate(14%, 14%)'
          }`,
        }}
      />
    </RenderIf>
  </Div>
);

export default Checker;
