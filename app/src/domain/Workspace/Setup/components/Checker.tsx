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
const Checker: FC<IChecker> = ({
  error,
  checked,
  active
}) => {
  let divPadding = '1.5px';
  if (active) {
    divPadding = error ? '6.7px' : '5px';
  } else {
    divPadding = error ? '3.5px' : '1.5px';
  }

  return (
    <Div
      width={ active ? '32px' : '26px' }
      height={ active ? '32px' : '26px' }
      borderRadius='50%'
      background={Color.white}
      padding={divPadding}
      style={{ border: `1.5px solid ${error ? 'red' : '#05C1E0'}` }}
    >
      <RenderIf isTrue={!error}>
        <RenderIf isTrue={checked}>
          <Check fill='#18C1E0' width='16' height='16' />
        </RenderIf>
      </RenderIf>
      <RenderIf isTrue={error}>
        <Div
          width='16px'
          height='16px'
          border='1px solid red'
          borderRadius='50%'
        />
      </RenderIf>
    </Div>
  );
};

export default Checker;
