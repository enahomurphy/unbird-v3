import React from 'react';

import { Div, H1, P, Space } from 'components/Styles/Element';
import RenderIf from 'components/RenderIf';
import { ICheckBox } from '../interfaces';
import { Color } from 'lib/themes/interface';
const CheckerInfoList = ({ checkBoxData, activeView }: { checkBoxData: ICheckBox, activeView: number }) => {
  return (
    <Div className="aside-checkbox-details-container" width="244px">
      <Space height="8px" />
      {checkBoxData.views.map(({ title, description, active }, i) => (
        <Div key={i}>
          <CheckerInfo title={title} description={description} index={i} active={activeView} />
          <RenderIf isTrue={i !== 1}>
            <Space height="56px" />
          </RenderIf>
          <RenderIf isTrue={i === 1}>
            <Space height="40px" />
          </RenderIf>
        </Div>
      ))}
    </Div>
  );
};

const CheckerInfo = ({
  title,
  description,
  index,
  active
}: {
  title: string;
  description: string;
  index: number;
  active: number;
}) => {
  return (
    <Div color={active === index ? Color.midnight0 : Color.steele0}>
      <H1
        fontSize="14px"
        lineHeight="16px"
        fontWeight="500px"
        style={{ color: 'inherit' }}
      >
        {title}
      </H1>
      <Space height="12px" />
      <P
        fontSize="12px"
        lineHeight="16px"
        fontWeight="400px"
        style={{ color: 'inherit' }}
      >
        {description}
      </P>
    </Div>
  );
};

export default CheckerInfoList;
