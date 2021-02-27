import React, { ReactElement, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ToggleButton } from '..';

const Template: Story = (): ReactElement => {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <div style={{ display: 'flex', width: '500px', flexFlow: 'wrap' }}>
      <ToggleButton toggle={() => setSelected(!selected)} selected={selected} />
    </div>
  );
};

export const SimpleToggle = Template.bind({ variant: 'red' });

SimpleToggle.args = {
  children: '',
};

export default {
  title: 'Unbird/Toggle',
  component: ToggleButton,
  argTypes: {},
} as Meta;
