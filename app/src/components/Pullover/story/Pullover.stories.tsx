import React, { ReactElement } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { logger } from 'lib/utils';
import { Button } from 'components/Buttons';
import { Div, P } from 'components/Styles';
import Pullover from '../Pullover';

const Template: Story = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: 400,
        height: 400,
      }}
    >
      <Pullover
        anchor="TOP_CENTER"
        size={5}
        renderRow={(index): ReactElement => (
          <Div
            padding="0px 5px"
            height="30px"
            display="flex"
            alignItems="center"
          >
            <P>{index}</P>
          </Div>
        )}
        onItemClicked={logger.log}
      >
        <Button>JwadADS</Button>
      </Pullover>
    </div>
  );
};

export const PulloverWithList = Template.bind({});

PulloverWithList.args = {};

export default {
  title: 'Unbird/Pullover',
  component: Pullover,
} as Meta;
