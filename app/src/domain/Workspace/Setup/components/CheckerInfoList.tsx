import React from 'react';

import { Div, H1, P, Space } from 'components/Styles/Element';
import RenderIf from 'components/RenderIf';
import { ICheckBox } from '../interfaces';

const CheckerInfoList = ({ checkBoxData }: { checkBoxData: ICheckBox }) => {
  return (
    <Div className="aside-checkbox-details-container" width="244px">
      {checkBoxData.views.map(({ title, description }, i) => (
        <Div key={i}>
          <CheckerInfo title={title} description={description} />
          <RenderIf isTrue={checkBoxData.views.length - 1 > i}>
            <Space height="56px" />
          </RenderIf>
        </Div>
      ))}
    </Div>
  );
};

const CheckerInfo = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Div>
      <H1
        fontSize="14px"
        lineHeight="16px"
        fontWeight="500px"
        style={{ color: '#2F353D' }}
      >
        {title}
      </H1>
      <Space height="12px" />
      <P
        fontSize="12px"
        lineHeight="16px"
        fontWeight="400px"
        style={{ color: '#2F353D' }}
      >
        {description}
      </P>
    </Div>
  );
};

export default CheckerInfoList;
