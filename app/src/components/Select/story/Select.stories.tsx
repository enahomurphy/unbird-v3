import React, { ReactElement } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { logger } from 'lib/utils';
import Select from '..';
import { OptionProps } from '../Select';

const Template: Story = (): ReactElement => {
  const data: OptionProps[] = [
    {
      label: 'External microphone',
      value: 'name',
    },
    {
      label: 'Headphone',
      value: 'name',
    },
    {
      label: 'Apple default microphone',
      value: 'name',
    },
  ];
  return (
    <div style={{ display: 'flex', width: '500px', flexFlow: 'wrap' }}>
      <Select
        title="Microphone"
        onSelectChange={(selected: OptionProps) => {
          logger.log(selected);
        }}
        options={data}
        defaultOption={data[0]}
      />
    </div>
  );
};

export const SimpleSelect = Template.bind({ variant: 'red' });

SimpleSelect.args = {
  children: '',
};

export default {
  title: 'Unbird/Select',
  component: Select,
  argTypes: {},
} as Meta;
