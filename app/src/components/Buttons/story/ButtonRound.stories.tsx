import React, { FC, ReactElement } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import * as Icons from 'components/Icons';

import { Color } from 'lib/themes/interface';
import { Button, ButtonProps } from '..';

const args = {
  borderRadius: '16px',
  background: Color.primary,
  inverse: false,
  fontSize: '14px',
};

const ButtonRound: FC<ButtonProps> = ({
  height,
  width,
  borderRadius,
  icon,
  children,
  iconSize,
  color,
  inverse,
  background,
  fontSize,
}): ReactElement => {
  return (
    <div style={{ display: 'flex', width: '500px', flexFlow: 'wrap' }}>
      <Button
        borderRadius={borderRadius}
        width={width}
        height={height}
        icon={icon}
        color={color}
        iconSize={iconSize}
        background={background}
        inverse={inverse}
        fontSize={fontSize}
      >
        {children}
      </Button>
    </div>
  );
};

const Template: Story<ButtonProps> = ({
  height,
  width,
  borderRadius,
  children,
  color,
  icon,
  inverse,
  background,
  fontSize,
}) => (
  <ButtonRound
    borderRadius={borderRadius}
    width={width}
    height={height}
    color={color}
    icon={icon}
    inverse={inverse}
    background={background}
    fontSize={fontSize}
  >
    {children}
  </ButtonRound>
);

export const Circle = Template.bind({ variant: 'red' });

Circle.args = {
  ...args,
  width: '100px',
  height: '100px',
  borderRadius: '100%',
  children: '',
};

export const Basic = Template.bind({ variant: 'red' });
Basic.args = {
  ...args,
  inverse: true,
  background: 'red',
  children: 'Overview',
  borderRadius: '5px',
};

export const White = Template.bind({});

White.args = {
  width: '100px',
  height: '25px',
  variant: 'white',
  children: 'I  am white',
  color: Color.licorice,
};

export const Primary = Template.bind({});

Primary.args = {
  background: Color.primary,
  color: Color.white,
  children: 'I  am Primary',
  borderRadius: '6px',
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  width: '100px',
  height: '25px',
  variant: 'primary',
  icon: 'Archive',
  children: 'archive',
  color: Color.licorice,
};

export const Inverse = Template.bind({});

Inverse.args = {
  width: '100px',
  height: '25px',
  inverse: true,
  children: 'archive',
};

export default {
  title: 'Unbird/Buttons',
  component: Button,
  argTypes: {
    height: { control: 'text' },
    width: { control: { type: 'text' } },
    background: { control: 'color' },
    color: { control: 'color' },
    icon: {
      control: { type: 'select', options: Object.keys(Icons) },
    },
    iconSize: { control: { type: 'number' } },
  },
} as Meta;
