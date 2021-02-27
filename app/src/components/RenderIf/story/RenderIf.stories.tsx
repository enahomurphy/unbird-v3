import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from 'components/Buttons';
import { P } from 'components/Styles';
import RenderIf from '../RenderIf';

interface TemplateProps {
  condition: boolean;
  child: React.ReactNode;
}

const Template: Story<{ data: TemplateProps[] }> = ({ data }) => {
  return (
    <>
      {data.map(({ condition, child }) => (
        <RenderIf isTrue={condition}>{child}</RenderIf>
      ))}
    </>
  );
};

export const RenderIfText = Template.bind({});

RenderIfText.args = {
  data: [
    {
      condition: true,
      child: <Button>A Button</Button>,
    },
    {
      condition: false,
      child: <P> A P tag </P>,
    },
  ],
};

export default {
  title: 'Unbird/RenderIf',
  component: RenderIf,
} as Meta;
