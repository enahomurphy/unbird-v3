import React from 'react';

import Checker from './Checker';
import { Div } from 'components/Styles/Element';
import { IFormState, IViewHolder } from '../interfaces';

const LineConnector = () => (
  <Div width="1px" height="84px" background="#8BE0EF" />
);

type CheckerStatus = {
  formState: IFormState;
  viewHolder: IViewHolder;
};

const CheckerStatus = ({ formState, viewHolder }: CheckerStatus) => {
  return (
    <Div
      className="aside-checkbox-inner-container"
      marginTop="5px"
      width="40px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginRight="36px"
    >
      <Checker
        error={Boolean(formState.name.error)}
        checked={Boolean(formState.name.valid)}
        active={viewHolder.activeView === 0}
      />
      <LineConnector />
      <Checker
        error={Boolean(formState.url.error)}
        checked={Boolean(formState.url.valid)}
        active={viewHolder.activeView === 1}
      />
      <LineConnector />
      <Checker
        error={Boolean(formState.emails.error)}
        checked={Boolean(formState.emails.valid)}
        active={viewHolder.activeView === 2}
      />
    </Div>
  );
};

export default CheckerStatus;
