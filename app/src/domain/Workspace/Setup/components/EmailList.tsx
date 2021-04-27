import React from 'react';

import { Div } from 'components/Styles/Element';
import { Close } from 'components/Icons';
import RenderIf from 'components/RenderIf';

interface IEmailList {
  emails: string[];
  onClickHandler?: Function;
  showCancel?: boolean;
}

const EmailList = ({ emails, onClickHandler, showCancel }: IEmailList) => {
  return (
    <Div
      display="flex"
      width="590px"
      flexWrap="wrap"
      justifyContent={!showCancel && 'center'}
    >
      {emails.map((email, index) => (
        <Div
          display="flex"
          width="fit-content"
          background="#FCF5E4"
          padding={'10px'}
          paddingLeft={!showCancel && '27px'}
          paddingRight={!showCancel && '27px'}
          key={index}
          marginRight="8px"
          marginBottom="16px"
        >
          <Div marginRight={showCancel && '10px'}>{email}</Div>{' '}
          <RenderIf isTrue={showCancel}>
            <Div cursor="pointer" onClick={(e) => onClickHandler(e, email)}>
              <Close fill="#CAAA64" />
            </Div>
          </RenderIf>
        </Div>
      ))}
    </Div>
  );
};

export default EmailList;
