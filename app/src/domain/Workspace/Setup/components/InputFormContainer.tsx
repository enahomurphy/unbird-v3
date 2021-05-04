import React from 'react';

import { H3, Space, P } from 'components/Styles';


interface IInputFormContainer {
  viewHolder,
  header?,
  middleData?
  input?
}

const InputFormContainer = ({
  viewHolder,
  header,
  middleData,
  input
}: IInputFormContainer) => {
  return (
    <>
      {header}
      <H3>{viewHolder.views[viewHolder.activeView].header}</H3>
      <Space height="8px" />
      <P>{viewHolder.views[viewHolder.activeView].body}</P>
      <Space height="36px" />
      {middleData}
      {input}
    </>
  );
};

export default InputFormContainer;
