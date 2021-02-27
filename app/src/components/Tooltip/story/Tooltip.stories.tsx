import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from 'components/Buttons';
import Trash from 'components/Icons/Trash';
import { Div } from 'components/Styles';
import Tooltip from '../Tooltip';

interface TemplateProps {
  text: string;
  child: React.ReactNode;
}

const Template: Story<{ data: TemplateProps[] }> = ({ data }) => {
  return (
    <div
      style={{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        display: 'flex',
        width: 400,
        height: 200,
      }}
    >
      {data.map(({ text, child }) => (
        <Tooltip text={text}>{child}</Tooltip>
      ))}
    </div>
  );
};

export const TooltipText = Template.bind({});

TooltipText.args = {
  data: [
    {
      text: 'Simple text',
      child: <Button>Hover over me</Button>,
    },
    {
      text: 'Trash me',
      child: (
        <Div height="18px" padding="10px 0">
          <Trash fill="black" />
        </Div>
      ),
    },
  ],
};

export default {
  title: 'Unbird/Tooltip',
  component: Tooltip,
} as Meta;
